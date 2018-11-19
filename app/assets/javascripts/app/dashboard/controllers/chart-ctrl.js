(function() {
  'use strict';
  angular.module('projectManagement').controller('ChartCtrl', ChartCtrl);
  ChartCtrl.$inject = ['$scope', '$stateParams', '$state','tasks'];

  function ChartCtrl($scope, $stateParams, $state, tasks) {
    var ChartVM = this;
    ChartVM.myChartArray = []

    function initialize(){
      angular.forEach(tasks, function(value) {
        var myChartObject = {}

        myChartObject.type = "PieChart";


       myChartObject.data = {"cols": [
           {id: "t", label: "Status", type: "string"},
           {id: "s", label: "Count", type: "number"}
       ], "rows": [
           {c: [
               {v: "Open"},
               {v: value.status.open},
           ]},
           {c: [
               {v: "In Progress"},
               {v: value.status.in_progress}
           ]},
           {c: [
               {v: "Done"},
               {v: value.status.done},
           ]}
       ]};

       myChartObject.options = {
           'title': value.name
       };

       ChartVM.myChartArray.push(myChartObject)

      })
    }

initialize();







  };
})();
