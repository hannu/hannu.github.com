$(document).ready(function() {
  $("#jobs-more-link").click(function (event) {
    $("#jobs-more").slideDown();
    $("#jobs-more-link").hide();
    event.preventDefault();
  });
  new Highcharts.Chart({
    chart: {
      renderTo: 'graph',
      margin: [0, 0, 0, 0],
      plotBorderWidth: 0,
      plotShadow: false  
    },
    title: {
      align: "center",
      floating: false,
      text: ""
    },
    credits: {
        enabled: false
    }, tooltip: {
      formatter: function() {
        return '<b>'+ this.series.name +'</b><br/>'+ 
        this.point.name +': '+ this.y +' %';
      }
    },
     series: [{
       type: 'pie',
       name: 'Core Expertice',
       size: '50%',
       data: [
          { name: 'Ruby /<br/> RoR', y: 40},
          { name: 'JavaScript', y: 20},
          { name: 'Python', y: 10},
          { name: 'C', y: 10},
          { name: 'Java', y: 10},
          { name: 'Others', y: 10},
       ],
       dataLabels: {
          enabled: true
       }
    }]
  });
});