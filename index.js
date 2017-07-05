const githubURL = 'https://api.github.com/repos/'

function getIssues() {
  fetch(githubURL + 'raycent/javascript-fetch-lab/issues', {
    method: 'get',
    headers: {
      Authorization: 'token ' + getToken()
    }
  }).then(resp => resp.json())
    .then(json =>  showIssues(json))
}

function showIssues(json) {
  issues = Handlebars.compile(document.getElementById("issues-template").innerHTML);
  document.getElementById('issues').innerHTML = issues(json)
}

function createIssue() {
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(githubURL + 'raycent/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      Authorization: 'token ' + getToken()
    },
    body: JSON.stringify(postData)
  }).then(getIssues());
}

function showResults(json) {
  template = Handlebars.compile(document.getElementById("repo-template").innerHTML);
  document.getElementById('results').innerHTML = template(json);
}

function forkRepo() {
  fetch(githubURL + 'learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    headers: {
      Authorization: 'token ' + getToken()
    }
  }).then(resp => showResults(resp))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
