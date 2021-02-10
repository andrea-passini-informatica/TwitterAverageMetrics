# TwitterAverageMetrics
Web app to get average metrics from the last 50 tweet of a seleceted profile.

Use the SCREEN_NAME to choose the right profile.
(The SCREEN_NAME is afer the "@", @SCREEN_NAME).

## Overview

This is a NodeJs project created with the framework Express.js. using Hogan as its view engine.
> Node.js - is a framework that allow us to use JavaScript for backend. <br/>
> Express.js - is a Node.js framework that makes creating the app and managing the internal routing easier. <br/>
> Hogan - is an Express.js view engine that makes really easy rendering of HTML pages. <br/>

This project is using Twitter's API user_timeline and public_metrics.
> user_timeline: allows us to get the last tweets from a twitter account. <br/> (https://developer.twitter.com/en/docs/twitter-api/metrics) <br/>
> public_metrics: allows us to get the metrics of a specific tweet. <br/> (https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-user_timeline) <br/>

To "beat" the CORS policy of Twitter's API the project contain also a proxy (made as before in Node.js with Express.js), more on that in the next segment.


## Structure 
 
This project is compossed by 2 different webApp:
> - Proxy: "beat-cors-server-master".
> - Main App: "TwitterMetrics".

As mantioned before the proxy, a server created with Express.js, allows to work around the CORS policy of Twitter's API and gives more modularity to the project itself.
Main App provide both frontend, user interface and AjaxCall to the proxy, and backend, managing client request and internal routing.
> Ajax - (Asyncronus JavaScript and XML) Request data from a server - after the page has loaded.

## Code

>If you are new to the Express world, this is how to read in rigth way the files: <br/>
>Server -> RouteScript -> FileRender -> Script inside the HTML page. <br/>
>For TwitterMetrics it will be App.js -> Index.js -> Index.hjs -> Metriche.js <br/>

### TwitterMetrics
- **Interface** <br/>
> The interface of the project is made with mini.css a css library. <br/>

The interface is really simple, is composed by a simple form and a button. <br/>
The button allows us to refresh the page. <br/>


### beat-cors-server-master


## How to run the code

Make sure to install Node.js, Express.js, Hogan and then use the command (in Node.js command line if you are using Windows ) npm install to install all the packages.
I used Nodemon as demon to support the execution and apply the changes made to the code really fast.

For each of the webApp:
Open folder off the project and use the command nodemon start.

Go to your browser and navigate to the localhost, port number 3000.
The proxy will listen on port number 3002.

http://127.0.0.1:3000/





