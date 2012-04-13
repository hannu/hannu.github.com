$(document).ready(function() {

  // More jobs link action
  $("#jobs-more-link").click(function (event) {
    $("#jobs-more").slideDown();
    $("#jobs-more-link").hide();
    event.preventDefault();
  });

  // Pie chart
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
  // Latest commit to this page
  $.ajax({
    url: 'https://api.github.com/repos/hannu/hannu.github.com/commits', 
    data: {
      per_page: 1
    },
    dataType: "jsonp",
    type: "get"
  }).success(function(response) {
    if (response.data.length > 0) {
      var date = new Date(response.data[0].commit.committer.date);
      var e = $('<p />').html('Latest change '+
        date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ': ' +
        '<a href="https://github.com/hannu/hannu.github.com/commit/'+response.data[0].sha+'">'+response.data[0].commit.message+'</a>');
      $("#git-details").append(e);
    }
  });
});