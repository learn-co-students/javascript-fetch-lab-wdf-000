

function getIssues() {
  fetch(`https://api.github.com/repos/ns5001/javascript-fetch-lab/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  for (var i=0;i<json.length;i++) {
    var source = $("#issues-template").html();
    var template = Handlebars.compile(source);
    var context = {title: json[i].title, body: json[i].body, url: json[i].url}
    var html = template(context);
    $(document.body).append(html);
  }
}

function createIssue() {
  $('#search').on('click',function(){
  const postData = {
    title: $("#title").val(),
    body: $("#body").val()
  };
  fetch(`https://api.github.com/repos/ns5001/javascript-fetch-lab/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  getIssues()
})
}


function showResults(json) {
  var source = $("#repo-template").html();
  var template = Handlebars.compile(source);
  var context = {name: json.name, url: json.url}
  var html = template(context);
  $(document.body).append(html);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));

}

function getToken() {
  return ''
}
