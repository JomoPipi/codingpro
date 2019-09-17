function D (x) { return document.getElementById(x) }
function E (x) { return document.createElement(x) }

window.onload = e => {
  e.preventDefault()
  const x = location.pathname.slice(1) || 'home'
  if (x === 'problem') 
    gotoQuestion(location.search.slice(1).split`&`.find(s => s.startsWith('number')).split`=`[1])
  else
    gotoPage(D(x + '-page'))
  return false
}

window.onpopstate = e => {
  e.preventDefault()
  if (e.state) { 
    if (e.state.n) 
      gotoQuestion(e.state.n, true)
    else {
      gotoPage(D(e.state.url), {preventURL: true})
    }
  }
  return false
}

// Global constants/variables:
var currentProblemId
const User = {
  loggedIn: false,
  completions:{},
  submissions:{},
  save: _=>_,
  reset: _ => (
    User.completions = {}, 
    User.submissions = {},
    User.loggedIn = false,
    User.save = _=>_
  )
}



// Initiliaze Firebase
const config = {
  apiKey: "AIzaSyAEu7t6BcYyJA1NqhMhYwSLVGbcUE4oivM",
  authDomain: "codingpro-5c5d9.firebaseapp.com",
  databaseURL: "https://codingpro-5c5d9.firebaseio.com",
  projectId: "codingpro-5c5d9",
  appId: "1:350756630303:web:1cf33ac22e3cd377534a2a"
};
firebase.initializeApp(config);



// Make auth and firestore references
const auth = firebase.auth()
const db = firebase.firestore()



CreateAllButtonsAtStart: {
  let color = [248,253,253], row = E('div')
  for (let i=0; i < PROBLEM_DATA.length; i++) {
    const btn = E('button')
    btn.type = 'button'
    btn.classList.add('btn')
    btn.style.margin = '5px'
    btn.style.width = '80px'
    btn.style.height = '80px'
    btn.style.font = '20px Arial'
    btn.id = i
    colorButton(i,btn)
    btn.onclick = _ => gotoQuestion(btn.id)
    btn.innerHTML = (+i+1)
    row.appendChild(btn)
    if (i % 10 === 9) {            
      row.style.backgroundColor = `rgb(${color.join`,`})`
      color.forEach((_,i) => color[i] -= 13)
      D('home-page').appendChild(row)
      row = E('div')
    }
  }
}
function colorButton(i, b) {
  const btn = b || D(''+i)
  const rgba = User.completions[i] ?
  `rgba(9${i%4===0?0:3},24${i%4===1?0:3},9${i%4===2?0:3},0.8` :
  `rgba(21${i%4===0?0:9},21${i%4===1?0:9},21${i%4===2?0:9},0.6`
  btn.style.backgroundColor=rgba
  btn.style.transition = 'all 0.6s ease'
  btn.onmouseover=_=>btn.style.backgroundColor='#aae'
  btn.onmouseout=_=>btn.style.backgroundColor=rgba
}
function colorAllButtons() {
  PROBLEM_DATA.forEach((_,i)=>colorButton(i))
}



Set_Up_Editor: {
  var editor = window.ace.edit(D("editor"));
  editor.renderer.setShowGutter(false);
  const options = {
    enableBasicAutocompletion: true, // the editor completes the statement when you hit Ctrl + Space
    enableLiveAutocompletion: true, // the editor completes the statement while you are typing
    showPrintMargin: false, // hides the vertical limiting strip
    fontSize: "100%",
    maxLines: 1000,
    autoScrollEditorIntoView: true,
  }
  editor.setOptions(options);
  editor.setTheme("ace/theme/chrome");
  editor.getSession().setMode("ace/mode/javascript");
}


const pages = [
    HOME,ABOUT,LOGIN,SIGNUP,PROBLEM
] = 'home,about,login,signup,problem'.split`,`.map(s => D(s + '-page'))

var currentPage;

PROBLEM.onkeydown = function(e) { e.ctrlKey && e.keyCode === 13 && runTests() }