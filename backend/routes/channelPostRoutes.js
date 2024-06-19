const express = require('express');
const router = express.Router();
const ChannelPost = require('../models/channelPost');

// Endpoint to create a new channel post
router.post('', async (req, res) => {
    const { postedBy, postedTo, message } = req.body;

    console.log(req.body)
    if (!postedBy || !postedTo || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const newPost = new ChannelPost({ postedBy, postedTo, message });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to create the post.' });
    }
});

// Endpoint to get posts by channel
router.get('', async (req, res) => {
    const { channel } = req.query;
console.log(channel)
    if (!channel) {
        return res.status(400).json({ error: 'Channel query parameter is required.' });
    }

    try {
        const posts = await ChannelPost.find({ postedTo: channel });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve posts.' });
    }
});

module.exports = router;
