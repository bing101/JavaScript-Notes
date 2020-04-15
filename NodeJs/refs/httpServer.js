http = require('http');

http.createServer( (req, res) => {
    res.write('Hello server !!..');
    res.end();
} )
    .listen(4000, () => console.log('Server started on 4000'));

    