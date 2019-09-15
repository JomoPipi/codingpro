// get data
// db.collection('users').get().then(snapshot => {
//     console.log(snapshot.docs)
// })








// listen for auth status changes
auth.onAuthStateChanged(user => {
    const [login,signup] = ['login','sign-up'].map(x => D(x + '-page-button').style)
    login.display = signup.display = user ? 'none' : 'block'
    D('logout').style.display = user ? 'block' : 'none'

    if (user) { 
        User.loggedIn = true
        User.save = _ => 
          User.loggedIn && db.collection('users').doc(user.uid).set({
            completions: User.completions,
            submissions: User.submissions
          })

        db.collection('users').doc(user.uid).get().then(doc => {
            const d = doc.data()
            for (const k in d.submissions)
                if (!User.submissions[k])
                    User.submissions[k] = d.submissions[k]
            for (const k in d.completions)
                if (d.completions[k])
                    User.completions[k] = true
        }).then(_ => {
            goHome()
            console.log('equals true',User.completions[0])
            colorAllButtons()
            User.save()
        })
    } else {
        User.loggedIn = false;
        User.reset()
    }
})








// create account
D('sign-up-form').onsubmit = function(e) {
    e.preventDefault()

    const message = msg => 
        D('sign-up-msg').innerHTML = '<span style="color:red;">' + msg + '</span>'

    const [email,pw,pw2] = ['email','pw','pw2'].map(x => this['sign-up-'+x].value)

    if (pw !== pw2) return message('The passwords don\'t match. Please try again.')
    console.log('email,pw =',email,pw)

    auth.createUserWithEmailAndPassword(email, pw).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            completions: User.completions,
            submissions: User.submissions
        })
    }).then(_ => this.reset())
}








// logout
D('logout').onclick = function(e) {
    e.preventDefault()
    User.loggedIn = false
    User.reset()
    colorAllButtons()
    auth.signOut()
}








// login 
D('login-form').onsubmit = function(e) {
    e.preventDefault()

    const message = msg => 
        D('login-msg').innerHTML = '<span style="color:red;">' + msg + '</span>'

    const [email,pw] = ['email','pw'].map(x => this['login-'+x].value)

    auth.signInWithEmailAndPassword(email,pw).then(cred => 
        this.reset() ).catch(e => message(e.message))
}