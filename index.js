var link = 'https://api.github.com/repos/';

function getIssues() {
  const repo = 'somestuffhere/javascript-fetch-lab/issues';
  fetch(link+repo).then(resp => resp.json()).then(json => showIssues(json))
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById("issues-template").innerHTML);
  var result = template(json);
  document.getElementById('issues').innerHTML = result;
}

function createIssue() {
  var title = document.getElementById('title').value;
  var body = document.getElementById('body').value;
  var params = { 'title':title , 'body':body }
  // const repo = 'learn-co-curriculum/javascript-fetch-lab';
  const repo ='somestuffhere/javascript-fetch-lab';
  fetch(  (link + repo + '/issues'), {
    method: 'post',
    headers: { Authorization: `token ${getToken()}`},
    body: params 
  }).then(resp => getIssues() );
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById("repo-template").innerHTML);
  var result = template(json);
  document.getElementById('results').innerHTML = result;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  // "api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/"
  //use fetch to fork it!
  fetch(link + repo + '/forks',
    { method: 'post',
    headers: { Authorization: `token ${getToken()}` } }
  ).then(resp => resp.json() ).then(json => console.log(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
