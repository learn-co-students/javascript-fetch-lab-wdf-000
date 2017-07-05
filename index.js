
function getIssues() {
  fetch('https://api.github.com/repos/IsuruV/javascript-fetch-lab/issues', {
    headers:{
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showIssues(json));
}

function showIssues(json) {
  var source = document.getElementById('issues-template').innerHTML;
  var template = Handlebars.compile(source);
  for(var i =0; i<json.length; i++){
    var context = {title:json[i].title, html_url: json[i].html_url, body:json[i].body}
  }
    var html = template(context);
  $('#issues').append(html)
}

function createIssue() {
  const postData = {
    title:$('#title').val(),
    body:$('#boduy').val()
  };
  fetch('https://api.github.com/repos/IsuruV/javascript-fetch-lab/issues',{
    method: 'post',
    body: JSON.stringify(postData),
    headers:{
      Authorization: `token ${getToken()}`
  }
})
  getIssues();
}

function showResults(json) {
  var source = document.getElementById('repo-template').innerHTML
  var template = Handlebars.compile(source);
  var context = {name: json.name, url: json.url}
  var html = template(context);
  $('#results').append(html)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}`,{
    headers:{
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showResults(json))
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '33eebdee4bc2be95f141af8a13d6f666c5d89d86';
  return token
}
