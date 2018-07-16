// Sample array of BBall players

var nbaArr = ['Kevin Durant', 'Stephen Curry', 'LeBron James', 'Anthony Davis', 'Joel Embiid', 'Kyrie Irving' ]

var wnbaArr = ['Lisa Leslie', 'Sue Bird', 'Candace Parker']

console.log(nbaArr);

// USING toString()
// deafault Comma-serperated-value
document.getElementById('nba-1').innerHTML += nbaArr.toString();

// USING join()
// Can also specify what value to seperate arrary elements with
document.getElementById('nba-2').innerHTML += nbaArr.join(` is > than `  );

// Using pop()
// Removes LAST element in array
// returns that element
document.getElementById('nba-3').innerHTML += nbaArr.pop();

// Using push()
// Adds new element to LAST element in array
// returns the UPDATED array length
document.getElementById('nba-4').textContent += nbaArr.push('Kawahi Leonard');
console.log(nbaArr)

// USING shift()
// Very SM to pop()
// Removes FIRST elelmetn in array
// returns that elemment
nbaArr.shift();
document.getElementById('nba-5').innerHTML += nbaArr;

// Using unshift()
// Very SM to push()
// ADDS to the first element on an array
// returns the updated array-length
nbaArr.unshift('Brian Scalabrine ')
document.getElementById('nba-6').innerHTML += nbaArr;

// Using array index to change specific elelemtn in array
// Updating the nbaArr index 2 'LeBron James'
nbaArr[2] = 'James Harden'
document.getElementById('nba-7').innerHTML = nbaArr;



// Event listener on 'more boogie' button
document.getElementById('boogie').addEventListener('click', moreBoogie);


// function to add 'Boogie Cousins' to end of nbaArr
function moreBoogie() {
    nbaArr[nbaArr.length] = 'Boogie Cousins'
    document.getElementById('nba-7').innerHTML = nbaArr;
}


// USING splice()
// to add new array elements
nbaArr.splice(0, 0, 'Michael Jordan', 'Kobe Bryant')
document.getElementById('nba-8').innerHTML += nbaArr;

nbaArr.splice(7, 1)
document.getElementById('nba-9').innerHTML += nbaArr;

// USING concat()
// used to combine different arrays
// Must create new array to concat() two seperate arrays
// can combine multiple arrays
var basketballGreats = wnbaArr.concat(nbaArr, ['Jason Yee', 'Jason Yee']);
document.getElementById('nba-10').innerHTML += basketballGreats;

let numbers = [12, 23, 34, 2, 1, 27, 49, 6, 46]

// Using filter(), extract all EVEN values of array
let even = numbers.filter(val => {
    return val % 2 === 0;
});
document.getElementById('numbers-1').innerHTML += even;

// Using filter(), extract all ODD values of array
let odd = numbers.filter(val => {
    return val % 2 === 1;
});
document.getElementById('numbers-2').innerHTML += odd;


// Using filter(), extract only 'Jason Yee' from nbaArr
let jason = basketballGreats.filter(val => {
    return val==='Jason Yee'
});
document.getElementById('nba-11').innerHTML += jason;