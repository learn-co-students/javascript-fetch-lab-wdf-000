const baseUrl = 'https://api.github.com/repos/'
const fork = `/javascript-fetch-lab`

function getIssues() {
  const repo = '/javascript-fetch-lab'
  fetch(`${baseUrl}${repo}/issues`).
  	then(resp => resp.json()).
    then(json => showIssues(json))
}

function showIssues(json) {
	const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
	document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }

  fetch(`${baseUrl}/${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${baseUrl}${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).
    then(json => showIssues(json))
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}