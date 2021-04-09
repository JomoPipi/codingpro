
        console.log('helloooo')

        
        
        
        
        
        
        
        
        
        function goHome() { gotoPage(HOME) }








        function aboutPage() { gotoPage(ABOUT) }








        function logInPage() { 
        D('login-pw').value = ''
        D('login-email').value = ''
        D('login-msg').innerHTML = ''
        gotoPage(LOGIN) 
        }








        function signUpPage() { 
        D('signup-pw').value = ''
        D('signup-pw2').value = ''
        D('signup-email').value = ''
        D('signup-msg').innerHTML = ''
        gotoPage(SIGNUP) 
        }








        function clearOutputLog(nofocus) {
            const output = D('output-table')
            D('all-pass-message').innerHTML = D('hint').innerHTML = output.innerHTML = ''
            while (output.children[0]) output.removeChild(output.children[0])
            if (!nofocus) 
            {
                editor.focus()
            }
        }
        







        function gotoPage(page, options) {
            if (!page) return
            currentPage = page
            if (options) var { n, preventURL } = options
            pages.forEach(q => q.style.display = q === page ? 'block' : 'none')

            //TODO: check why this throws an error:
            // if (!preventURL) {
            //     const url = page.id
            //     history.pushState(
            //     {url,n}, url, url.split`-`[0] + (n == null ? '' : '?number=' + n))
            // }
        }







        
    function gotoQuestion(n,p) {
        console.log('n =',n)
        clearOutputLog()
        currentProblemId = +n
        const a = currentProblemId === 0, b = currentProblemId === PROBLEM_DATA.length-1 ;
        [[a,'previous'],[b,'next']].forEach(([x,y]) => {
            const s = D(y).style
            s.pointerEvents = x ? 'none' : 'auto'  
            s.color =         x ? '#999' : '#87a'
            s.cursor =        x ? 'default' : 'pointer'
        })
        D('problem-name').innerHTML =          PROBLEM_DATA[n].name
        D('problem-examples').innerHTML =      PROBLEM_DATA[n].examples
        D('problem-description').innerHTML =   PROBLEM_DATA[n].description
        editor.setValue(User.submissions[n] || PROBLEM_DATA[n].submission)
        editor.place()
        gotoPage(PROBLEM,{n:n,preventURL:p})
        }







        function resetQuestion(n) {
        if (confirm('Are you sure you erase all your work?')) {
            editor.setValue(PROBLEM_DATA[n].solutionSetup)
            editor.place()
        }
        }







        function runTests() {
        // 'use strict'   nah 
        clearOutputLog(true)
        const output = D('output-table')
        
        if (!arguments[0]) {
            output.innerHTML = 'running tests...'
            setTimeout(_ => { 
                runTests(true)
            } , Math.random()*200 + 300 | 0)
            return
        }

        let passedAll = true    
        const { name, solution, testinputs } = PROBLEM_DATA[currentProblemId]
        const printOutput = [], super_log = console.log
        var submission, src
        try { 
            src = editor.getValue()
            console.log = (...xs) => printOutput.push(xs.join` `); 
            eval('try{' + src +'\n; submission =' + name + '} catch(e) { submission = e.toString() } ') 
        } 
        catch(e) { output.innerHTML = e.toString() }
        
        User.submissions[currentProblemId] = src
        User.save()

        if (typeof submission !== 'function') {
            if (submission == null) output.innerHTML = `ReferenceError: ${name} is not defined`
            output.innerHTML = submission.toString() || `syntax error or ${name} needs to be a function.`
            console.log = super_log
            return; 
        }
        
        const table = E('table')
        addHeaders: { 
            const row = E('tr'); 
            ['Expected', 'Actual',''].forEach(r => {
            const R = E('th')
            R.innerHTML = r
            row.append(R)
            })
            table.append(row) 
        }
        table.style.float = 'left'
        table.style.width = '100%'
        table.style.height = '20px'
        table.style.margin = '1px'
        for (let args of testinputs) {
            try {
            var actual = submission(...args)
            } catch (e) {
            actual = e.toString()
            }
            const expected = solution(...args)
            const pass = actual === expected
            passedAll = passedAll && pass
            const convert = x => ({"string":'"'+x+'"'})[typeof x] || x
            const row = E('tr')
            const [A,B,C] = [E('td'),E('td'),E('td')]
            A.innerHTML = `${name}(${args.map(convert).join` `}) → ${convert(expected)}`
            B.innerHTML = '' + convert(actual)
            C.style.color = pass ? '#505' : '#fff'
            C.innerHTML = pass ? 'passed!' : 'failed!'
            C.style.backgroundColor = pass ? '#0f0' : '#f00';
            [A,B,C].forEach(x => {
            x.style.border = '1px solid #bbb'
            row.append(x)
            })
            table.append(row) 
        }
        const tableContainer = E('div')
        tableContainer.style.overflowY = 'scroll'
        tableContainer.style.overflowX = 'hidden'
        tableContainer.style.maxHeight = '40vh'
        tableContainer.style.backgroundColor ='#ddd'
        tableContainer.style.borderLeft = tableContainer.style.borderTop = '1px solid #aaa'
        tableContainer.style.borderRight = tableContainer.style.borderBottom = '1px solid #ccc'
        tableContainer.append(table)
        output.append(tableContainer)

        User.completions[currentProblemId] = passedAll ? true : false
        D('all-pass-message').innerHTML = passedAll ? 
        `You've passed all the tests! 
        &nbsp; 
        <button onclick="gotoQuestion(${currentProblemId+1});" style="color:#505;cursor:pointer;">
            NEXT
        </button> <br>` : ' '
        colorButton(currentProblemId)
        User.save()

        const logOutput = E('div')
        { const style = logOutput.style
            style.clear = 'both'
            style.width = '100%'
            style.marginTop = '2%'
            style.overflowY = 'scroll'
            style.maxHeight = '30vh'
            style.borderLeft = style.borderTop = '2px solid #aaa'
            style.borderRight = style.borderBottom = '2px solid #ccc'
        }
        logOutput.innerHTML = printOutput.map(x=>' &nbsp; '+x).join`<br>`
        if (printOutput.length) output.append(logOutput)
        
        console.log = super_log
        
        D('all-pass-message').scrollIntoView({ behavior: "smooth" })
    }
