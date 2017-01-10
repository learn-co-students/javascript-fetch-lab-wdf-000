function getIssues() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`).then(resp => resp.json()).then(json => showIssues(json));
}

function showIssues(json) {
  var template = Handlebars.compile($('#issues-template').html());
  $('#issues').html(template(json));
}

function createIssue() {
  const title = $("#title").val();
  const body = $("#body").val();
  const data = { title: title, body: body};
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(data) 
  }).then(res => getIssues());
}

function showResults(json) {
  var template = Handlebars.compile($("#repo-template").html());
  $("#results").html(template(json));
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return ''
  return ''
}
