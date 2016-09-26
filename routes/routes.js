module.exports = function(express, app, moment) {
    var router = express.Router();
    var platform = require('platform');
    var ipInfo = require("ipinfo");
    var obj = {};

    router.get("/", function(req, res, next){
        res.render("index", {});
    });
 
    // router.get("/whoami", function(req, res, next) {
    //     //   console.log ( "Platform" +  platform.os);
    //     ipInfo((err, cLoc) => {
    //         obj.IP = err || cLoc.ip;
    //     });
    //     obj.software = platform.os;
    //     obj.language = req.acceptsLanguages('en-US', 'uk', 'ru-mo', 'be');
    //     res.send(obj);
    // });

    app.use("/", router);
}