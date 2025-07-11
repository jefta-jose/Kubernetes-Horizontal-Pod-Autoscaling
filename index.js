import http from 'http';

http.createServer((req, res) => {
    if(req.url === '/cpu') {
        const start = Date.now();

        while(Date.now() - start < 500){
            console.log("Simulating CPU load");
        }

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('CPU load simulated for 500ms');
    } else  {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
}).listen(3000, () => {
    console.log("server is running on port 3000");
})