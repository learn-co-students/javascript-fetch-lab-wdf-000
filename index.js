function getIssues() {
  /// GET /repos/:owner/:repo/issues
  const token = getToken();
  let url = 'https://api.github.com/repos/satub/javascript-fetch-lab/issues';
  fetch(url, {
    method: 'get',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById("issues-template").innerHTML);
  var result = template(json);
  document.getElementById("issues").innerHTML = result;
}

function createIssue() {
  const token = getToken();
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  const postIssue = {
    'title': title,
    'body': body
  };

 let url = 'https://api.github.com/repos/satub/javascript-fetch-lab/issues';

  fetch(url, {
    method: 'post',
    body: JSON.stringify(postIssue),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(getIssues());
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById("repo-template").innerHTML);
  var result = template(json);
  document.getElementById("results").innerHTML = result;
}

function forkRepo() {
    //use fetch to fork it!
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken();
  const postFork = {
  };

 let url = 'https://api.github.com/repos/' + repo + '/forks';

  fetch(url, {
    method: 'post',
    body: JSON.stringify(postFork),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
