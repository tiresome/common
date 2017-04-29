/**
 * Created by zhengqiguang on 2017/4/18.
 */
var MongoClient = require("mongodb").MongoClient,
    f = require("util").format;

var Promise = require("es6-promise");

var Mdb = function (opt) {
    this.opt = opt;
    return this.init(opt);
}


Mdb.prototype = {
    constructor: Mdb,
    init: function () {

        let url = f('mongodb://%s:%s@%s:%s/tiresome?authMechanism=%s',
            this.opt.user, this.opt.pwd, this.opt.host, this.opt.port, this.opt.authMechanism);
        let promise = new Promise((resolve, reject) => {

            MongoClient.connect(url, (err, db) => {
                if (!err) {
                    resolve(db);
                } else {
                    reject(err);
                }

            });

        });

        return promise;
    }
}


module.exports = Mdb;