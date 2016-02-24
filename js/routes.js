page('/', indexController.index);
page.exit('/', indexController.onExit);
// page('/results', resultsController.loadAll, resultsController.index);
page('/results', resultsController.loadIndexPage);
// page('/results/:date', resultsController.loadByDate, resultsController.loadByLatLon resultsController.index);
page('/results/:parameters', resultsController.detectParameters, resultsController.index, resultsController.fetchData, resultsController.afterAjaxCall);
// page('/results/:parameters', resultsController.detectParameters, dataFetcher.fetchData, resultsController.index);
page('/overview', overviewController.callBasicData, overviewController.index, overviewController.afterAjaxCall);
// overviewController.loadAll, overviewController.index part of the overview route

page();
//
