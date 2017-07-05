function getIssues(repo) {
  let userName = 'natalisp'
  let r = 'javascript-fetch-lab'
    fetch('https://api.github.com/repos/' + userName + '/' + r + '/issues')
      .then(resp => resp.json())
      .then(json => showIssues(json))
  }

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function createIssue() {
  const repo = 'javascript-fetch-lab'
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  const postData = { title: title, body: body }

  fetch('https://api.github.com/repos/' + repo + '/issues', {
    method: 'post',
    body: JSON.stringify(postData),
    headers:  {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => getIssues(repo))
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/' + repo + '/forks',
{
  method: 'post',
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
