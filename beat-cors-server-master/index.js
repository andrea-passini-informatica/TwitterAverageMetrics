const express = require('express');
const request = require('request');
const Twit = require('twit');
const err = require("twit");

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/twitter/metrics:id", function (req, res) {
    let ids = req.params.id.replace(":","");

    const bearer = "Bearer AAAAAAAAAAAAAAAAAAAAACY%2FLwEAAAAAHgEBUSepcLzB7ez2OXSXPoyDwU8%3DWh8kfelSyOvlyNhJCs2am44XJdsL3krmzOaDR1XQ4rqg2eRFFD";

    const ajaxMethod = 'GET';

    //let ids = "1355107692524744706";
    let tweetFields = "public_metrics";
    let expansions = "attachments.media_keys";
    let mediaFields = "public_metrics";

    let ajaxUrl = "https://api.twitter.com/2/tweets?ids=" + ids +
        "&tweet.fields=" + tweetFields +
        "&expansions=" + expansions +
        "&media.fields=" + mediaFields;

    const options = {
        url: ajaxUrl,
        method: ajaxMethod,
        headers: {
            "Accept": "application/json",
            'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAACY%2FLwEAAAAAHgEBUSepcLzB7ez2OXSXPoyDwU8%3DWh8kfelSyOvlyNhJCs2am44XJdsL3krmzOaDR1XQ4rqg2eRFFD',
        }
    };

    request(options,
        function (error, response, body) {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }
            let json = JSON.parse(body);
            console.log(json.data[0].public_metrics.retweet_count);
            console.log(json.data[0].public_metrics.reply_count);
            console.log(json.data[0].public_metrics.like_count);
            console.log(json.data[0].public_metrics.quote_count);

            res.json(JSON.parse(body).data[0]);
        }
    );
});

app.get("/twitter:name", function (req, res){

    let screen_name = req.params.name.replace(":","");

    let ajaxMethod = 'GET';
    let ajaxUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + screen_name +"&count=50";

    const options = {
        url: ajaxUrl,
        method: ajaxMethod,
        headers: {
            "Accept": "application/json",
            'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAACY%2FLwEAAAAAHgEBUSepcLzB7ez2OXSXPoyDwU8%3DWh8kfelSyOvlyNhJCs2am44XJdsL3krmzOaDR1XQ4rqg2eRFFD',
        }
    };

    request(options,
        function (error, response, body) {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }
            let json = JSON.parse(body);

            console.log(screen_name);
            console.log(json.length);

            res.json(JSON.parse(body));
        }
    );
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
