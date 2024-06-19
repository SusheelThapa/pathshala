const express = require('express');
const router = express.Router();

router.get('', async (req, res) => {
    const { username, resource } = req.query;
    console.log(username, resource)
    try {
        // API call to permit from crea
        if (resource == "daily-notice")
            res.status(200).json({
                create: true,
                read: true,
                delete: false
            })
        else
            res.status(200).json({
                create: false,
                read: false,
                delete: false
            })
    }
    catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
});


module.exports = router;
