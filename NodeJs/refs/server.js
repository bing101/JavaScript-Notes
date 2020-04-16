// Creating a server
http = require('http');

const server = http.createServer( (req, res) => {
    console.log(req.url);
    if(req.url === '/')
        res.end('<h3> HomePage </h3>');
});

PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

