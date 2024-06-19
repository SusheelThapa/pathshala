const express = require('express');
const router = express.Router();

const checkPermissions = require('../utils/checkPermission');


router.get('', async (req, res) => {
    const { username, resource } = req.query;
    console.log(username, resource)

    try {
        const permission = await checkPermissions(username, resource)
        res.status(200).json(permission)

    }
    catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
});


module.exports = router;
