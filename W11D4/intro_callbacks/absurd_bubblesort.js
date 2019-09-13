const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {

  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`is ${el1} > ${el2} ?`, function (answer) {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    };
    
  }); 
}

// askIfGreaterThan("marie cookies", "galletas maria", el => console.log(el));

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
    // let madeAnySwaps = false;


  if (i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
      let answer = isGreaterThan;
    //   console.log(arr);
      if (answer === true ) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; //[2, 3]
        // console.log(arr);
        madeAnySwaps = true; 
        innerBubbleSortLoop(arr, i + 1, true, outerBubbleSortLoop);
    } else {
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    }
    
    });
  } 
  else {
      outerBubbleSortLoop(madeAnySwaps); 
    }
    
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    outerBubbleSortLoop(true);
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
        sortCompletionCallback(arr);
    };
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 8, 2], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

//[1, 2, 2, 3, 5, 6, 8]