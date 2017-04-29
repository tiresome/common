/**
 * Created by zhengqiguang on 2017/4/29.
 */


let WxJokeItem = function () {
    this.init();
}

WxJokeItem.getItemJSON = function (headerText, footerText, author) {
    if (!author) {
        author = "网络";
    }

    return {
        create_time: new Date(),
        content: {
            haederText: headerText,
            footerText: footerText
        },
        author
    }

}

WxJokeItem.prototype = {

    constructor: WxJokeItem,
    init: function () {
    }
}

module.exports = WxJokeItem;
