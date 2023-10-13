// Express Dependencies
const path = require('path');

const express = require('express');
const app = express();

// Environment Variables
const port = process.env.PORT || 5000;
const static_file_options = {
	dotfiles	: 'ignore',
	etag		: false,
	index		: false,
	redirect	: false,
	setHeaders	: function (res, path, stat) {
		res.set('x-timestamp', Date.now());
	}
};

app.use((req, res, next) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// Finding out our Index html
const dist_dir = path.join(__dirname, "client", "dist");
const index_html = path.join(dist_dir, "index.html");

// Use express static, to serve static files
app.use('/public', express.static(dist_dir, static_file_options));

app.use((req, res, next) => {
	res.sendFile(index_html, err => err && next(err));
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
