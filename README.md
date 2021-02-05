# TwitterAverageMetrics
Web app to get average metrics from the last 50 tweet of a seleceted profile.

Use the SCREEN_NAME to choose the right profile.
(The SCREEN_NAME is afer the "@", @SCREEN_NAME).

## Overview

This is a NodeJs project created with the framework Express.js. using Hogan as its view engine.
> Node.js -  is a framework that allow us to use JavaScript for backend. <br/>
> Express.js - is a Node.js framework that makes creating the app and managing the internal routing easier. <br/>
> Hogan is an Express.js view engine that makes really easy rendering of HTML pages. <br/>

This project is using Twitter's API user_timeline and public_metrics.
> user_timeline allow us to get the last tweets from a twitter account <br/>
> public_metrics allow us to get the metrics of a specific tweet <br/>


## Structure 
 
This project is compossed by 2 different webAp:
> - Proxy: "beat-cors-server-master"
> - Main App: "TwitterMetrics"  


I've decided to use a proxy to "beat" the CORS plicy of Twitter's API

