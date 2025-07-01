import express from 'express';

const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;

const urlDatabase = {};
app.get('/:shortId', (req, res, next) => {
    const longUrl = urlDatabase[req.params.shortId];
    if(longUrl) {
        res.redirect(longUrl);
    } else {
        res.status(404).json({ msg: 'URL not found' });
    }
});

app.post('/shorten', (req, res, next) => {
    const { url } = req.body;
    if(!url) {
        return res.status(400).json({ msg: 'URL is required' });
    }
    const shortId = Math.random().toString(36).substring(2, 8);
    urlDatabase[shortId] = url;
    res.json({ shortId, shortUrl: `http://localhost:${port}/${shortId}` });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});