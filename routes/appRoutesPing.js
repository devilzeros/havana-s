module.exports = function (app) {

    app.get('/ping', function (req, res) {    //  Not Controller
        res.status(200).json('Hello Ping!!');
    })
    
    app.get('/', function (req, res) {    //  Not Controller
        res.status(200).json('Hello Wold!!');
    })
};
