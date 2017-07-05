function getIssues() {
  const repo = 'javascript-fetch-lab'

  fetch(`https://api.github.com/repos/jin501/${repo}/issues`,
    {
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML);
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const repo = 'javascript-fetch-lab'
  const issueData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch (`https://api.github.com/repos/jin501/${repo}/issues`,
    {
      method: 'post',
      body: JSON.stringify(issueData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json()).then(getIssues())
}

function showResults(json) {
  const template =
  Handlebars.compile(document.getElementById('repo-template').innerHTML);
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`,
    {
      method: 'post',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
