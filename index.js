const token =  '';

function getIssues() {
  var url = 'javascript-fetch-lab/issues/'

  fetch(`https://github.com/repos/hailuhr/${url}`, {
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(resp => resp.json()).then(json => showIssues(json))
}

function showIssues(json) {
  var source = document.getElementById("issues-template").innerHTML
  var template = Handlebars.compile(source);
  document.getElementById("results").innerHTML = template(json)
}




function createIssue() {
  const repo = 'hailuhr/javascript-fetch-lab'
  // var title = $("#title").val()
  const body = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }

  // $("#body").val()
  fetch(`https://api.github/com/repos/${repo}/issues`, {
    method: `post`,
    body: JSON.stringify(body),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => getIssues(resp))
}

function showResults(json) {
  // debugger
  // var name = json.name
  // var url = json.url
  var source = document.getElementById("repo-template").innerHTML
  var template = Handlebars.compile(source);
  document.getElementById("results").innerHTML = template(json);

 //     var source = document.getElementById('repo-template').innerHTML
 //      var template = Handlebars.compile(source);
 //      document.getElementById("results").innerHTML = template(json)
}




function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  // const token = getToken()

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: `post`,
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => getIssues())
  // }).then(function(res){
  //     debugger;
  //     $("#results").append(`res.status: ${res.status}`)
  //   })
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return token
  return ''
}
