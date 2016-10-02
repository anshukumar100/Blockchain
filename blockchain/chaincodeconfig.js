var credentials = require('./credentials.json').credentials;

var environments = {


    development : {
        network:{
            peers: [
                {
                    discovery_host: 'localhost',
                    discovery_port: 7051,
                }
            ],
            ca : {
                ca : {
                    url :  "localhost:7054"
                }
            },
            users: [
                {
                    username: "WebAppAdmin",
                    secret: "DJY27pEnl16d",
                    enrollId: "WebAppAdmin",
                    enrollSecret: "DJY27pEnl16d"
                },
                {
                    username: "NLUser",
                    secret: "Xurw3yU9zI0l",
                    enrollId: "admin",
                    enrollSecret: "Xurw3yU9zI0l"
                }
            ],
            app_users: [
                {
                    username: 'HongKong',
                    secret: 'passw0rd',
                    usertype: 1
                },
                {
                    username: 'Singapore',
                    secret: 'passw0rd',
                    usertype: 1
                },
                {
                    username: 'UK',
                    secret: 'passw0rd',
                    usertype: 1
                },
                {
                    username: 'Germany',
                    secret: 'passw0rd',
                    usertype: 1
                },
                {
                    username: 'France',
                    secret: 'passw0rd',
                    usertype: 2
                },
                {
                    username: 'Spain',
                    secret: 'passw0rd',
                    usertype: 3
                },
                {
                    username: 'Norway',
                    secret: 'passw0rd',
                    usertype: 3
                }
            ]
        },
        chaincode:{
            deployed_name: null,     						    // hashed cc name from prev deployment. Makes sure no redeploy is needed!
            global_path: 'github.com/chaincode',        	// the path to the chaincode dir on this machine.
            local_path: 'chaincode',                     // the path to your local chaincode related to the specific project
            auto_redeploy: false 						        // watch the filesystem for changes
        }
    }
}


module.exports = environments.development;