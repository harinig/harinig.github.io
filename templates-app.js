angular.module('templates-app', ['home/home.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h1>Text Reverse <small>try it out now!</small></h1>\n" +
    "  </div>\n" +
    "  <form name=\"reverseForm\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"inputText\">Enter Text</label>\n" +
    "      <input id=\"inputText\" ng-model=\"inputText\" type=\"text\" placeholder=\"Text\" class=\"form-control\" required />\n" +
    "    </div>\n" +
    "    <button class=\"btn btn-info\" ng-click=\"onBtnReverseClick()\">Reverse</button>\n" +
    "  </form>\n" +
    "\n" +
    "<!--   <div class=\"container top-buffer\"> -->\n" +
    "    <div ng-show=\"reversedText\" class=\"alert alert-info top-buffer\" role=\"alert\">\n" +
    "      <span class=\"type-effect\">{{ reversedText }}</span>\n" +
    "    </div>\n" +
    "  <!-- </div> -->\n" +
    "</div> \n" +
    "\n" +
    "");
}]);
