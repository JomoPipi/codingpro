// get data
// db.collection('users').get().then(snapshot => {
//     console.log(snapshot.docs)
// })








// listen for auth status changes
auth.onAuthStateChanged(user => {
    const [login,signup] = ['login','signup'].map(x => D(x + '-page-button').style)
    login.display = signup.display = user ? 'none' : 'block'
    D('logout-form').style.display = user ? 'block' : 'none'

    if (user) { 
        D('email-display').innerHTML = user.email
        User.loggedIn = true
        User.save = function() {
            User.store()
            User.loggedIn && db.collection('users').doc(user.uid).set({
                completions: User.completions,
                submissions: User.submissions
            })
        }
        db.collection('users').doc(user.uid).get().then(async doc => {
            const d = await doc.data()
            if (d.submissions) for (const k in d.submissions)
                if (!User.submissions[k])
                    User.submissions[k] = d.submissions[k]
            if (d.completions) for (const k in d.completions)
                if (d.completions[k])
                    User.completions[k] = true
        }).then(_ => {
            if (currentPage === LOGIN || currentPage === SIGNUP) goHome()
            colorAllButtons()
            User.save()
        })
    }
})








// create account
D('signup-form').onsubmit = function(e) {
    e.preventDefault()

    const message = msg => 
        D('signup-msg').innerHTML = '<span style="color:red;">' + msg + '</span>'

    const [email,pw,pw2] = ['email','pw','pw2'].map(x => this['signup-'+x].value)

    if (pw !== pw2) return message('The passwords don\'t match. Please try again.')

    auth.createUserWithEmailAndPassword(email, pw).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            completions: User.completions,
            submissions: User.submissions
        })
    }).then(_ => this.reset()).catch(e => message(e))
}








// logout
D('logout').onclick = function(e) {
    e.preventDefault()
    User.loggedIn = false
    User.reset()
    colorAllButtons()
    goHome()
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