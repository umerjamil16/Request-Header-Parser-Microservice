module.exports = function(express, app, moment) {
    var router = express.Router();
    var platform = require('platform');
    var obj = {};
    moment().format();
const ipInfo = require("ipinfo");
// inside middleware handler
// var ipMiddleware = function(req, res, next) {
//     var clientIp = requestIp.getClientIp(req); // on localhost > 127.0.0.1
//     console.log("IP: " +clientIp);
//     next();
// };

    


//    obj.

    router.get("/", function(req, res, next) {
    //   console.log ( "Platform" +  platform.os);
    ipInfo((err, cLoc) => {
       obj.IP = cLoc.ip;
    });
    obj.software = platform.os;
    obj.language = req.acceptsLanguages( 'en-US', 'uk', 'ru-mo', 'be' );
    res.send(obj);

    // console.log("IP: " + ipMiddleware.clientIp);
//        res.render("index", {});
    });

    router.get("/:unix", function(req, res, next) {
        obj.unix = null;
        obj.natural = null;
        if (!isNaN(req.params.unix)) {
            obj.unix = req.params.unix;
            obj.natural = moment.unix(req.params.unix).toString().slice(4, 16);
        } else  {
            if(req.params.unix.indexOf("20") !== -1){
           obj.natural = req.params.unix;
        }

            var arr1 = req.params.unix.toString().split(",");
            var arr2 = arr1[0].split(" ");

            var year = arr1[1];
            var day = arr2[1];
            var month = 0;

            if (arr2[0] == "December") {
                month = 12;
            } else if (arr2[0] == "January") {
                month = 1;
            } else if (arr2[0] == "February") {
                month = 2;
            } else if (arr2[0] == "March") {
                month = 3;
            } else if (arr2[0] == "April") {
                month = 4;
            } else if (arr2[0] == "May") {
                month = 5;
            } else if (arr2[0] == "June") {
                month = 6;
            } else if (arr2[0] == "July") {
                month = 7;
            } else if (arr2[0] == "August") {
                month = 8;
            } else if (arr2[0] == "September") {
                month = 9;
            } else if (arr2[0] == "October") {
                month = 10;
            } else if (arr2[0] == "November") {
                month = 11;
            }
            obj.unix = new Date(year + "." + month + "." + day).getTime() / 1000;
        }

        res.send(obj);
    });

    app.use("/", router);
}