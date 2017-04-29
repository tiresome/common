/**
 * Created by zhengqiguang on 2017/4/18.
 */

let Mdb = require("./Mdb");


let Promise = require("es6-promise");
let mdb = new Mdb({
    user: encodeURIComponent('tiresome-admin'),
    pwd: encodeURIComponent("admin"),
    authMechanism: 'DEFAULT',
    host: "192.168.33.10",
    port: 27017
});
//
// mdb.then((db) => {
//
//     console.log("rerere");
//
//     let restoreText = db.collection('restoreText');
//     restoreText.insertOne({name: 'hhh'});
//     db.close();
//
// }, (err) => {
//     console.log(err);
// }).catch((e) => {
//     console.log(e);
// });



