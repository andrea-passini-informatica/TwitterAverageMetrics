function callM(id) {
    let screen_name = document.getElementById(id).value;

    let wrapper1 = 'p';

    let likes = 0;
    let retweets = 0;
    let quotes = 0;
    let replies = 0;

    let length = 0;
    let resLength =0;

    callAjax(template);

    function callAjax(callback) {
        // Script parameters
        let ajaxMethod = 'GET';
        let ajaxUrl = "http://127.0.0.1:3002/twitter:" + screen_name;

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let resp = JSON.parse(xhr.response);

                    callback(resp, templateM);
                }
            }
        }

        xhr.open(ajaxMethod, ajaxUrl, true);

        xhr.send();
    }

    function template(response, temp) {
        let res = response;

        resLength = res.length;

        let i = 0;
        for(i=0; i<res.length; i++){
            callAjaxMetrics(res[i].id_str, addMetrics);
        }

        temp();
    }

    function callAjaxMetrics(id_str, callback){
        let ajaxMethod = 'GET';
        let ajaxUrlMetrics = "http://127.0.0.1:3002/twitter/metrics:";

        let xhrM = new XMLHttpRequest();

        xhrM.onreadystatechange = function () {
            if (xhrM.readyState === 4) {
                if (xhrM.status === 200) {
                    let resp = JSON.parse(xhrM.response);

                    callback(resp.public_metrics);
                }
            }
        }

        xhrM.open(ajaxMethod, ajaxUrlMetrics + id_str, true);

        xhrM.send();
    }

    function addMetrics(obj) {
        retweets += obj.retweet_count;
        likes += obj.like_count;
        quotes += obj.quote_count;
        replies += obj.reply_count;

        length ++;
        templateM(length)
    }

    function  templateM(a){
        if(a == resLength){
            let newEle1 = document.createElement(wrapper1);

            retweets = retweets / resLength;
            likes = likes / resLength;
            quotes = quotes / resLength;
            replies = replies / resLength;

            let HTMLchild =
                '<div class="row">' +
                    '<div class="card" style="border-color: #00B7FF">' +
                        '<p>' +
                            "Profile: " +
                            screen_name +
                        '</p>' +
                        '<p>' +
                            "Retweets: " +
                            retweets +
                        '</p>' +
                        '<p>' +
                            "Replies: " +
                            replies +
                        '</p>' +
                        '<p>' +
                            "Likes: " +
                            likes +
                        '</p>' +
                        '<p>' +
                            "Quotes: " +
                            quotes +
                        '</p>' +
                    '</div>' +
                '</div>';

            let targ = document.getElementById("ciao");
            newEle1.innerHTML = HTMLchild;
            targ.appendChild(newEle1);
        }
    }
}