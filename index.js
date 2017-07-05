const baseUrl = 'https://api.github.com/';
const userName = 'hafizrahman1';
const fork = `${userName}/javascript-fetch-lab`;

function getIssues() {
// GET /repos/:owner/:repo/issues
fetch(`${baseUrl}repos/${fork}/issues`).
  then(resp => resp.json()).
  then(json => showIssues(json))
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  // POST /repos/:owner/:repo/issues
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }

  fetch(`${baseUrl}repos/${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML);
  document.getElementById('results').innerHTML = template(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //POST /repos/:owner/:repo/forks
  //use fetch to fork it!
  fetch(`${baseUrl}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
