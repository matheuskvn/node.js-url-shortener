# Node.js URL Shortener

A simple URL shortener API built with Node.js and Express.  
This program generates a short ID for any long URL and redirects users to the original URL when they access the short link.

## Features

- Shorten any valid URL via a simple API.
- Redirects users from the short URL to the original long URL.
- In-memory storage (URLs are lost when the server restarts).

## How to Use

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
node [index.js](http://_vscodecontentref_/0)
```
The server will run on port 8000 by default (or the port set in the PORT environment variable.

### 3. Shorten a URL
Send a POST request to "/shorten" with a JSON body:

```json
{
  "url": "https://example.com"
}
```
The response will be:

```json
{
  "shortId": "abc123",
  "shortUrl": "http://localhost:8000/abc123"
}
```

### 4. Redirect using the short URL

Visit `http://localhost:8000/abc123` (replace `abc123` with your actual shortId) in your browser, and you will be redirected to the original URL.

## Note

- This project uses in-memory storage, so all data will be lost when the server restarts.

## License

ISC
```
