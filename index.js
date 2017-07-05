function getIssues() {
  const token = getToken()

  fetch('https://api.github.com/repos/ckshei/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${token}`
    }
  }).
    then(res => res.json()).
    then(json => showIssues(json))
}

function showIssues(json) {
  const src = document.getElementById("issues-template").innerHTML
  const template = Handlebars.compile(src)
  const issuesList = template(json)
  document.getElementById("issues").innerHTML = issuesList
}

function createIssue() {
  const token = getToken() 
  var title = document.getElementById("title").value
  var body = document.getElementById("body").value
  const postData = {
    title: `${title}`,
    body: `${body}`
  }
  fetch('https://api.github.com/repos/ckshei/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authrozation: `token ${token}`
    }
  })
}

function showResults(json) {
  const src = document.getElementById("repo-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(json)
  document.getElementById("results").innerHTML = repoList
}

function forkRepo() {
  var token = getToken()
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('http://api.github.com/repos/' + repo, {
    method: 'post', 
    headers: {
      Authorization: `token ${token}`
    }
  })
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
