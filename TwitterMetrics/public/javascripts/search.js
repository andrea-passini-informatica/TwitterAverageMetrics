const Twit = require('twit');
//const notifier = require('node-notifier');
//const open = require('open');
//const franc = require('franc')

const apikey = 'k2byyLzEOBkiXse522sargA2F'
const apiSecretKey = 'IZl1dtBzazgZNz7yCc5aBC7holSWVXc6j8OCYRY5JPJhzzY6dQ'
const accessToken = '757992423167590400-gj3bys8eO7rnoxJD46IleI24RjRXEAr'
const accessTokenSecret = 'ghcbmw1IHYeYuIPbfMnSmN3DWN2KjOulJS7sKaJl2lpl1'

var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});

(async () => {

    //1. GET RECENT TWEETS
    T.get('search/tweets', { q: '#tesla since:2020-04-15', count: 1 }, function(err, data, response) {
      const tweets = data.statuses;
      //JSON.stringify(tweets)
      // .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
      //.map(tweet => tweet.text)
      //.filter(tweet => tweet.toLowerCase().includes('elon'));
      console.log(typeof(tweets));
      //console.log("OBJ", tweets);
      console.log(data.statuses[0].created_at);
   })
})();