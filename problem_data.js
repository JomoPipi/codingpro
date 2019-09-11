function Problem(name,description,examples,solutionSetup,solution,testinputs,functionName) {
    this.name=name
    this.description=description
    this.examples=examples
    this.solutionSetup=solutionSetup
    this.solution=solution
    this.submission=solutionSetup
    this.testinputs=testinputs
    this.functionName = functionName || name // update problem data to get rid of need for ||
}

const PROBLEM_DATA = [
    [
      'myFirstFunction',
      "Just return the input. If you don't know how to do that, then you should research it. Coders should be good at research.",
      'myFirstFunction(2) → 2 <br> myFirstFunction(-27) → 27 <br>',
      'function myFirstFunction(input) {\n  \n}',
      x => x,
      [[0],[1],[-2],[235],['256'],[true],['hello']],
      'myFirstFunction'
    ],
    [
      'sumDouble',
      'Given two int values, return their sum. But if the two values are the same, then return double their sum.',
      'sumDouble(1, 2) → 3 <br> sumDouble(3, 2) → 5 <br> sumDouble(2, 2) → 8 <br>',
      'function add(a, b) {\n  \n}',
      (a,b) => a === b ? 4 * a : a + b,
      [[1,1],[0,2],[2,0],[2,2],[0,0],[5,-1],[-3,-3],[13,12],[0.43,-0.43],[-3,3]],
      'add'
    ],
    [
      'fakeMockup',
      'This website is still under construction.',
      'example(input) -> exampleOutput',
      'function code(x) {\n  \n}',
      x => x,
      ['a','b','c','d']
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