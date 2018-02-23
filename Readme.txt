

## Webmenu ##

Demonstratie hoe Node, NPM, Gulp te gebruiken met less, minify/uglify en local-server + (Remote)LiveReload voor eenvoudigere ontwikkeling van CSS en JS.

### Stap 1 ###
om dependecies te downloaden en installeren in projectfolder:

    > npm install

### Stap 2 ###
Start de localserver op poort 3000 (zie gulpfile.js, deze start server.js) en houdt wijzigingen in .less en .js bestanden

    > gulp watch

### Stap 3 ###
Installeer de Chrome RemoteLiveReload Extensie om het benodigde livereload.js script automatisch te laten injecteren.
https://chrome.google.com/webstore/detail/remotelivereload/jlppknnillhjgiengoigajegdpieppei

#### *Stap 3 alternatief* ####
Je kunt ook in de broncode van de livereload pagina het script http://localhost:35729/livereload.js laden. Het poortnummer is een vast gegeven en wordt door de gulp-livereload module opgezet.

### Stap 4 ###
Open in Chrome de lokale server (http://localhost:3000/indexnew.html) en pas je less of js bestanden aan. Geen browser refresh meer nodig!!


----------


*Menu naar een voorbeeld van codepen:*
https://codepen.io/j_holtslander/pen/XmpMEp


> Written with [StackEdit](https://stackedit.io/).
