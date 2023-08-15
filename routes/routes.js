const router = require('express').Router();

router.get('/', (req, res) => {
    const headers_received = req.rawHeaders;
    const header_object = {};

    for (let i = 0; i < headers_received.length; i += 2) {
        const key = headers_received[i];
        const value = headers_received[i + 1];
        header_object[key] = value
    }

    console.log(header_object)

    res.render('index.ejs', { headers: header_object });
});

module.exports = router;