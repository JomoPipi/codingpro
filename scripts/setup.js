function D (x) { return document.getElementById(x) }
function E (x) { return document.createElement(x) }

var currentProblemId, currentPage
const User = {
  loggedIn: false,
  completions:{},
  submissions:{},
  store: _ => localStorage.setItem('User',JSON.stringify([User.completions,User.submissions])),
  save: _ => User.store(),
  reset: _ => (
    localStorage.clear(),
    User.completions = {}, 
    User.submissions = {},
    User.loggedIn = false,
    User.save = _ => User.store()
  )
}

window.onload = e => {
  e.preventDefault()
  const s = localStorage.getItem('User')
  if (s) {
    try {
      [User.completions,User.submissions] = JSON.parse(s)
    } catch(e) { 
      User.reset() // value was garbage and not JSON
    }
    colorAllButtons()
  }
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
  let color = [244,253,253], row = E('div')
  for (let i=0; i < PROBLEM_DATA.length; i++) {
    const btn = E('button')
    btn.type = 'button'
    btn.classList.add('btn')
    btn.style.margin = '1%'
    // btn.style.width = '80px'
    // btn.style.height = '80px'
    // btn.innerHTML = i+1
    btn.style.width = '18%'
    btn.style.height = '40px'
    btn.innerHTML = (i+1)// + '. ' + PROBLEM_DATA[i].name
    btn.style.font = '20px Arial'
    btn.id = i
    colorButton(i,btn)
    btn.onclick = _ => gotoQuestion(btn.id)
    row.appendChild(btn)
    if (i % 5 === 4) {            
      row.style.backgroundColor = `rgb(${color.join`,`})`
      color.forEach((_,i) => color[i] -= 13/2)
      D('home-page').appendChild(row)
      row = E('div')
    }
  }
}
function colorButton(i, b) {
  const btn = b || D(''+i)
  const rgba = User.completions[i] ?
  `rgba(9${i%3===0?0:3},24${i%3===1?0:3},9${i%3===2?0:3},0.8` :
  `rgba(21${i%3===0?0:3},21${i%3===1?0:3},21${i%3===2?0:3},0.6`
  btn.style.backgroundColor=rgba
  btn.style.transition = 'all 0.6s ease'
  btn.onmouseover=_=>btn.style.backgroundColor='#aae'
  btn.onmouseout=_=>btn.style.backgroundColor=rgba
}
function colorAllButtons() {
  PROBLEM_DATA.forEach((_,i)=>colorButton(i))
}



Set_Up_Editor: {
  var editor = window.ace.edit(D("editor"))
  // 3 favorites: eclipse, chrome, and gruvbox
  // test different editors: let COUNT = [0]
  // let THEMES = 'dracula,clouds_midnight,solarized_light,solarized_dark,xcode,iplastic,chrome,merbivore_soft,kuroir,idle_fingers,gruvbox,eclipse,crimson_editor,dreamweaver,clouds'.split`,`
  // document.onclick = function pick() { const t = THEMES[COUNT[0]++ % THEMES.length];editor.setTheme("ace/theme/" + t);console.log('theme =',t) }
  // editor.renderer.setShowGutter(false);
  const options = {
    enableBasicAutocompletion: true, // the editor completes the statement when you hit Ctrl + Space
    enableLiveAutocompletion: true, // the editor completes the statement while you are typing
    showPrintMargin: false, // hides the vertical limiting strip
    fontSize: "100%",
    maxLines: 100,
    autoScrollEditorIntoView: true,
    showGutter:false,
  }
  // remove pretentious punctuation (that might come from a phone):
  let fromServer
  editor.getSession().on('change', function(e) {
    if (fromServer) return;
    const s = editor.getValue()
    if (e.action === 'insert' && e.lines.some(l => /[\u201C\u201D\u2018\u2019]/.test(l))) {
      fromServer = true
      const {row, column} = editor.getCursorPosition()
      editor.setValue(s.split`\n`.map(s => 
        s.replace(/[\u201C\u201D]/g,'"').replace(/[\u2018\u2019]/g,"'") ).join`\n`)
      editor.clearSelection()
      editor.selection.moveTo(row, column)
      fromServer = false
    }
  })
  D('editor').style.borderRadius = '10px'
  editor.setOptions(options);
  editor.setTheme("ace/theme/chrome");
  editor.getSession().setMode("ace/mode/javascript");
  editor.place = _ => {
    
    // if (window.innerWidth <= 700) return; 
    const row = editor.session.getLength() - 2
    editor.selection.moveTo(row)
    editor.navigateLineEnd()
    editor.focus()
  }
}


const pages = [
    HOME,ABOUT,LOGIN,SIGNUP,PROBLEM
] = 'home,about,login,signup,problem'.split`,`.map(s => D(s + '-page'))


PROBLEM.onkeydown = function(e) { e.ctrlKey && (e.keyCode === 13 || e.keyCode === 83) && runTests() }