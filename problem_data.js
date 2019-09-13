function Problem(name,description,examples,solutionSetup,solution,testinputs,hint,authorSolution) {
    this.name=name
    this.description=description
    this.examples=examples
    this.solutionSetup=solutionSetup
    this.solution=solution
    this.submission=solutionSetup
    this.testinputs=testinputs
    this.hint=hint
    this.authorSolution = authorSolution
}

const PROBLEM_DATA = [
    [
      'myFirstFunction',
      "Just return the input.<br> If you don't know how to do that, then you should research it. Coders should be good at research.",
      'myFirstFunction(2) → 2 <br> myFirstFunction(-27) → 27 <br>',
      'function myFirstFunction(input) {\n  \n}',
      x => x,
      [[0],[1],[-2],[235],['256'],[true],['hello']],
      'Try using <span style="color:purple;font-family:monospace;">return</span>. Your code should be between the two curly brackets. { }'
    ],
    [
      'add',
      'Create a function that takes two inputs and returns their sum.',
      'add(1,1) → 2 <br> add(-5,5) → 0',
      'function add(a,b) {\n  \n}',
      (a,b) => a + b,
      [[1,1],[-5,5],[0,1],[12,-34],[-123,456]],
      'Can you guess which symbol is used to perform addition?'
    ],
    [
      'sumDouble',
      'Given two numbers, return their sum. But if the two values are the same, then return double their sum.',
      'sumDouble(1, 2) → 3 <br> sumDouble(3, 2) → 5 <br> sumDouble(2, 2) → 8 <br>',
      'function sumDouble(a, b) {\n  \n}',
      (a,b) => a === b ? 4 * a : a + b,
      [[1,1],[0,2],[2,0],[2,2],[0,0],[5,-1],[-3,-3],[13,12],[0.43,-0.43],[-3,3]],
      'If-statements are one of the most common things you will use when programming. <br> Here is an example program you can study:<br> <span style="font-family:monospace;"> function equals2(x) { <br>&nbsp; if (x == 2) return true; <br>&nbsp; return false; <br> } <br> equals2(2) </span> evaluates to true, and <span style="font-family:monospace;"> equals2(3) </span> evaluates to false. <br> If you\'d like to see for yourself, open the developer tools tab on your browser, <br> and paste the code into the console. Then type <span style="font-family:monospace;"> equals2(2) </span> and press enter.'
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'code',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      [[1,1],[0,2],[2,0],[2,2],[0,0],[5,-1],[-3,-3],[13,12],[0.43,-0.43],[1,1],[0,2],[2,0],[2,2],[0,0],[5,-1],[-3,-3],[13,12],[0.43,-0.43],[1,1],[0,2],[2,0],[2,2],[0,0],[5,-1],[-3,-3],[13,12],[0.43,-0.43]]
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
    ]
].map(args => new Problem(...args))