function getIssues() {
  let issueRepo = 'javascript-fetch-lab/issues'
  let url = `https://api.github.com/repos/bibikhadiza/${issueRepo}`
  fetch(url, {
    headers: {
    Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showIssues(json))

}

function showIssues(json) {
  var source = document.getElementById('issues-template').innerHTML
  var template = Handlebars.compile(source);
  document.getElementById("issues").innerHTML = template(json)
}

function createIssue() {
  const issueRepo = `javascript-fetch-lab/issues`
  const issueBody = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(`https://api.github.com/repos/bibikhadiza/${issueRepo}`, {
    method: 'post',
    body: JSON.stringify(issueBody),
    headers: {
    Authorization: `token ${getToken()}`
    }
  }).then(resp => getIssues(resp))
}


function showResults(json) {
  debugger;
    var source = document.getElementById('repo-template').innerHTML
     var template = Handlebars.compile(source);
     document.getElementById("results").innerHTML = template(json)
}

function getToken() {
  return ""
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`,{
    method: 'post',
    headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => res.json()).then(json => getIssues())
}
