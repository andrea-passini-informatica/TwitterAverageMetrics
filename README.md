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
> user_timeline -  allows us to get the last tweets from a twitter account <br/>
> public_metrics -  allows us to get the metrics of a specific tweet <br/>

To "beat" the CORS policy of Twitter's API the project contain also a proxy (made as before in Node.js with Express.js), more on that in the next segment.


## Structure 
 
This project is compossed by 2 different webAp:
> - Proxy: "beat-cors-server-master".
> - Main App: "TwitterMetrics".

As mantioned before the proxy, a server created with Express.js, allows to work around the CORS policy of Twitter's API and gives more modularity to the project itself.
Main App provide both frontend, user interface and AjaxCall to the proxy, and backend, managing client request and internal routing.
> Ajax - (Asyncronus JavaScript and XML) Request data from a server - after the page has loaded.

## Code

>How to read correctly the files
>Server -> RouteScript -> FileRender -> Script inside the HTML page.
>For TwitterMetrics it will be App.js -> Index.js -> Index.hjs -> Metriche.js



