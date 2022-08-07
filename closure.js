// CHALLENGE 1
function createFunction() {
	
    function sayHi(){
      
      console.log("hello")
    }
      return sayHi;
  }
  
  // /*** Uncomment these to check your work! ***/
   const function1 = createFunction();
  // function1(); // => should console.log('hello');
  
  
  // CHALLENGE 2
  function createFunctionPrinter(input) {
  
    
      function fncWithInput(){
      
      console.log(input);
    }
    return fncWithInput;
    
    
  }
  
  // /*** Uncomment these to check your work! ***/
   const printSample = createFunctionPrinter('sample');
   //printSample(); // => should console.log('sample');
   const printHello = createFunctionPrinter('hello');
   //printHello(); // => should console.log('hello');
  
  
  // CHALLENGE 3
  function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
      counter ++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }
  
  const willCounter = outer();
  const jasCounter = outer();
  
  // Uncomment each of these lines one by one.
  // Before your do, guess what will be logged from each function call.
  
  // /*** Uncomment these to check your work! ***/
  // willCounter();
  // willCounter();
   //willCounter();
  
  // jasCounter();
  // willCounter();
  
  
  function addByX(x) {
    
   function add(num){
     console.log(x+num)
   }
    return add;
  
  }
  
  // /*** Uncomment these to check your work! ***/
   const addByTwo = addByX(2);
   /*addByTwo(1); // => should return 3
   addByTwo(2); // => should return 4
   addByTwo(3); // => should return 5
  
   const addByThree = addByX(3);
   addByThree(1); // => should return 4
   addByThree(2); // => should return 5
  
   const addByFour = addByX(4);
   addByFour(4); // => should return 8
   addByFour(5); // => should return 9
  */
  
  // CHALLENGE 4
  function once(func) {
    
    let counter=0;
    var result=null;
      
    function isOnce(num){
          ++counter
      
      if(counter==1){
        result = func(num);
        
      }
      return result
    }
  
    return isOnce
  }
  
  
  // /*** Uncomment these to check your work! ***/
  /* const onceFunc = once(addByTwo);
   console.log(onceFunc(4));  // => should log 6
   console.log(onceFunc(10));  // => should log 6
  // console.log(onceFunc(9001));  // => should log 6
  
  */
  // CHALLENGE 5
  function after(count, func) { 
    let counter = 0
    
    function xTimes(){
    ++counter
    if(counter == count){
       func()
    }
    else{
          
    }
    }
    return xTimes
  }
  
  // /*** Uncomment these to check your work! ***/
  /* const called = function() { console.log('hello') };
   const afterCalled = after(3, called);
   afterCalled(); // => nothing is printed
   afterCalled(); // => nothing is printed
   afterCalled(); // => 'hello' is printed
  
  */
  // CHALLENGE 6
  function delay(func, wait) {
    
    function delay1(param){
     setTimeout(func,wait)
          return setTimeout
    }
    return delay1
      }
  const callHi = function() { console.log('hello') };
  const isDelay = delay(callHi,5000)
  //isDelay("x")
  
  
  // CHALLENGE 7
  function rollCall(names) {
    let counter=0
       const iterateArr =()=>{
      if(counter>=names.length){
        
        return console.log("Everyone accounted for")
      }
      const res = names[counter]
      counter++
      return console.log(res)
    } 
    return iterateArr
  }
  
  // /*** Uncomment these to check your work! ***/
   const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
  /* rollCaller() // => should log 'Victoria'
   rollCaller() // => should log 'Juan'
   rollCaller() // => should log 'Ruth'
   rollCaller() // => should log 'Everyone accounted for'
  
  */
  // CHALLENGE 8
  function saveOutput(func, magicWord) {
    const valObj ={}
    
    const magicFunc=val=>{
      
      if(magicWord==val){
        
      return valObj
      }
      
      valObj[val] = func(val)
      
      return valObj[val]
    }
    return magicFunc
  
  }
  
  // /*** Uncomment these to check your work! ***/
   const multiplyBy2 = function(num) { return num * 2; };
   const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
   /*console.log(multBy2AndLog(2)); // => should log 4
   console.log(multBy2AndLog(9)); // => should log 18
   console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }
  */
  
  // CHALLENGE 9
  function cycleIterator(array) {
    let counter =0
    const loopFunc =()=>{
      if(array.length==counter){
        counter = 0
      }
      let res = array[counter]
      counter++
      return res
    }
      return loopFunc
  }
  
  // /*** Uncomment these to check your work! ***/
   const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
   const getDay = cycleIterator(threeDayWeekend);
  /* console.log(getDay()); // => should log 'Fri'
   console.log(getDay()); // => should log 'Sat'
   console.log(getDay()); // => should log 'Sun'
   console.log(getDay()); // => should log 'Fri'
  */
  
  // CHALLENGE 10
  function defineFirstArg(func, arg) {
    
    const complexFunc = val =>{
      
      return func(arg,val)
      
    }
    return complexFunc
  
  }
  
  // /*** Uncomment these to check your work! ***/
   const subtract = function(big, small) { return big - small; };
   const subFrom20 = defineFirstArg(subtract, 20);
  // console.log(subFrom20(5)); // => should log 15
  
  
  // CHALLENGE 11
  function dateStamp(func) {
    
    const dateObj ={}
    
    const dateFunc =(val)=>{
      dateObj.date = Date()
      dateObj.output = func(val)
      return dateObj
    }
    return dateFunc
  
  }
  
  // /*** Uncomment these to check your work! ***/
   const stampedMultBy2 = dateStamp(n => n * 2);
  /* console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
   console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }
  */
  
  // CHALLENGE 12
  function censor() {
      
    let changeArrWords = {}
    
    const changeStr = (...vals) => {
      
      if(vals.length==2){
        changeArrWords[vals[0]] = vals[1]
        return changeArrWords 
      }
      else if(vals.length==1){
        vals = vals.join("");
        for(const n of Object.keys(changeArrWords)){
        vals= vals.replace(n,changeArrWords[n])
        }
        return vals
      }
    
      
    }
    
    return changeStr
  }
  //the above code it can be cause mutation be careful
  
  // /*** Uncomment these to check your work! ***/
   const changeScene = censor();
   changeScene('dogs', 'cats');
   changeScene('quick', 'slow');
   //console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'
  
  
  // CHALLENGE 13
  function createSecretHolder(secret) {
    let unknown =secret
    const secretObj ={
      getSecret : function(){
        return unknown
      },
      setSecret : function(val){
        unknown = val
        return unknown
      }
    }
          return secretObj  
    }
  
  
  // /*** Uncomment these to check your work! ***/
   const obj = createSecretHolder(5)
   /*console.log(obj.getSecret())// => returns 5
   console.log(obj.setSecret(2))// => returns 2 
   console.log(obj.getSecret()) // => returns 2
  */
  
  // CHALLENGE 14
  function callTimes() {
    let counter = 0
    
    const xTimes =()=>{
      counter++
           console.log(counter)
      return counter
    }
    return xTimes
  
  }
  
  // /*** Uncomment these to check your work! ***/
   let myNewFunc1 = callTimes();
   let myNewFunc2 = callTimes();
   /*myNewFunc1(); // => 1
   myNewFunc1(); // => 2
   myNewFunc2(); // => 1
   myNewFunc2(); // => 2
  
  */
  // CHALLENGE 15
  function roulette(num) {
      let counter = 0;
    const turnFunc=()=>{
      if(counter == num){
        return "pick a number to play again"
      }
      else if(counter == num-1){
        counter++
        return "win"
      }
       else if(num >0 && counter != num-1){
        counter++
        return "spin"
       }
    }
    return turnFunc
  
  }
  
  // /*** Uncomment these to check your work! ***/
   const play = roulette(3);
   /*console.log(play()); // => should log 'spin'
   console.log(play()); // => should log 'spin'
   console.log(play()); // => should log 'win'
   console.log(play()); // => should log 'pick a number to play again'
   console.log(play()); // => should log 'pick a number to play again'
  */
  
  // CHALLENGE 16
  function average() {
    let total = 0;
    let counter = 0;
    let avarage = 0;
    const averageNum =val=>{
          if(val !== undefined ){
        total += val;
        counter++;
        avarage = total/counter;
        
      }  
      
      return avarage
    } 
      return averageNum
  }
  
  // /*** Uncomment these to check your work! ***/
   const avgSoFar = average();
  /*onsole.log(avgSoFar()); // => should log 0
   console.log(avgSoFar(4)); // => should log 4
   console.log(avgSoFar(8)); // => should log 6
   console.log(avgSoFar()); // => should log 6
   console.log(avgSoFar(12)); // => should log 8
   console.log(avgSoFar()); // => should log 8
  */
  
  // CHALLENGE 17
  function makeFuncTester(arrOfTests) {
    
    const whatIsThisFunc = func =>{
      
      for(const n of arrOfTests){
        
      return (func(n[0])==n[1])? true : false 
      }
      }
    
    
    
    return whatIsThisFunc
    
  }
  
  
  // I could misunderstood this challenge logic
  
  
  // /*** Uncomment these to check your work! ***/
  
  /* const capLastTestCases = [];
   capLastTestCases.push(['hello', 'hellO']);
   capLastTestCases.push(['goodbye', 'goodbyE']);
   capLastTestCases.push(['howdy', 'howdY']);
   const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
   const capLastAttempt1 = str => str.toUpperCase();
   const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
   console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
   console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
  
  */
  // CHALLENGE 18
  function makeHistory(limit) {
    
       let moves=[]
    
    const moveFunc = val => {
      
      if(val==="undo"){
        if(moves.length == 0){
          
          return "nothing to undo"
        }
        
        let temp= moves.pop()
        
        return ""+temp+" undone" // we can use {} too
      }
      
      moves.push(val)
      if(moves.length > limit){
        moves.shift()
      }
      return ""+val+ " done"
      
      
      
    }
      
    return moveFunc
  }
  
  // /*** Uncomment these to check your work! ***/
   /*const myActions = makeHistory(2);
   console.log(myActions('jump')); // => should log 'jump done'
   console.log(myActions('undo')); // => should log 'jump undone'
   console.log(myActions('walk')); // => should log 'walk done'
   console.log(myActions('code')); // => should log 'code done'
   console.log(myActions('pose')); // => should log 'pose done'
   console.log(myActions('undo')); // => should log 'pose undone'
   console.log(myActions('undo')); // => should log 'code undone'
   console.log(myActions('undo')); // => should log 'nothing to undo'
  
  */
  // CHALLENGE 19
  function blackjack(array) {
   
    let counter = 0
    
    const dealer= (x,y)=>{
      let status = ""
      let total = 0
      
      const calculate =()=>{
          if(total == 0){
          total=x+y
          return total
        }
          if(total<21){
          total+=array[counter]
          counter++
          if(total>21){
            status = "bust"
            return status
          }
          return total
        }
        else if(total>21 && status === "bust"){
          return "you are done!"
        }
  
        
      }
      
      return calculate
    }
    
    
    
    return dealer
  }
  
  // /*** Uncomment these to check your work! ***/
  
  // /*** DEALER ***/
   const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);
  
   /*** PLAYER 1 ***/
   const i_like_to_live_dangerously = deal(4, 5);
   console.log(i_like_to_live_dangerously()); // => should log 9
   console.log(i_like_to_live_dangerously()); // => should log 11
   console.log(i_like_to_live_dangerously()); // => should log 17
   console.log(i_like_to_live_dangerously()); // => should log 18
   console.log(i_like_to_live_dangerously()); // => should log 'bust'
   console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
   console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
  
  // /*** BELOW LINES ARE FOR THE BONUS ***/
  
  // /*** PLAYER 2 ***/
   const i_TOO_like_to_live_dangerously = deal(2, 2);
   console.log(i_TOO_like_to_live_dangerously()); // => should log 4
   console.log(i_TOO_like_to_live_dangerously()); // => should log 15
   console.log(i_TOO_like_to_live_dangerously()); // => should log 19
   console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
   console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
   console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
  
  // /*** PLAYER 3 ***/
   const i_ALSO_like_to_live_dangerously = deal(3, 7);
   console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
   console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
   console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
   console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
   console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
  