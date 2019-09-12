function Problem(name,description,examples,solutionSetup,solution,testinputs,hint) {
    this.name=name
    this.description=description
    this.examples=examples
    this.solutionSetup=solutionSetup
    this.solution=solution
    this.submission=solutionSetup
    this.testinputs=testinputs
    this.hint=hint
}

const PROBLEM_DATA = [
    [
      'myFirstFunction',
      "Just return the input. If you don't know how to do that, then you should research it. Coders should be good at research.",
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
      'hint coming soon'
    ],
    [
      'fakeMockup',
      'This website is still under construction. <br> long text <br> bla bla bla <br> scroll <br> .',
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