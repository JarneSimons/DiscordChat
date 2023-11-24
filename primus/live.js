module.exports.go = (server) => {
    const Primus = require('primus');
    const primus = new Primus(server, {/* options */});

    // check if conncection, then console.log
    primus.on('connection', (spark) => {
        console.log('connection😃😃');

        // check if data, then console.log
        spark.on('data', (data) => {
            console.log('data😁😁', data);

            //send data back to all clients
            primus.write(data); // all
            
        });
    });
}

