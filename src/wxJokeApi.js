/**
 * Created by zhengqiguang on 2017/4/20.
 */



let Mdb = require("./Mdb");


let mdb = new Mdb({
    user: encodeURIComponent('tiresome-admin'),
    pwd: encodeURIComponent("admin"),
    authMechanism: 'DEFAULT',
    host: "192.168.33.10",
    port: 27017
});


let wxJokeApi = {
    insertOne: (wxJokeObj) => {
        return mdb.then(db => {
            let wxJokeItem = db.collection('wxJokeItem');
            return wxJokeItem.insertOne(wxJokeObj).then(function (result) {
                db.close();
                return result;
            });
        }, error => {
            console.error(error);
        }).catch(e => {
            console.error(e);
        });
    },
    insertMany: (wxJokeObjSet) => {
        return mdb.then(db => {
            let wxJokeItemCollection = db.collection("wxJokeItem");
            return wxJokeItemCollection.insertMany(wxJokeObjSet).then(result => {
                db.close();
                return result;
            });

        }, error => {
            console.error(error);
        }).catch(e => {
            console.error(e);
        });

    }

}

module.exports = wxJokeApi;