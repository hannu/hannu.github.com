(function() {
  $(function() {
    $("#jobs-more-link").click(function(event) {
      $("#jobs-more").slideDown();
      $("#jobs-more-link").hide();
      return event.preventDefault();
    });
    return $.ajax({
      url: "https://api.github.com/repos/hannu/hannu.github.com/commits",
      data: {
        per_page: 1
      },
      dataType: "jsonp",
      type: "get"
    }).success(function(response) {
      if (response.data.length > 0) {
        var date = new Date(response.data[0].commit.committer.date);
        var commitLink = $("<a />").attr('href', 'https://github.com/hannu/hannu.github.com/commit/' + response.data[0].sha).text(response.data[0].commit.message);
        var element = $("<p />").text("Latest change " + date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + ": ");
        element.append(commitLink);
        return $("#git-details").append(element);
      }
    });
  });
}).call(this);
