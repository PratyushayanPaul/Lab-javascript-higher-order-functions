// Function #1: Array Slice
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
let modifiedFood = foods.slice(1,4);
console.log(modifiedFood);

//Function #2: Array Splice
let modifiedFoodOne = foods;
modifiedFoodOne.splice(2,0,'noodles', 'icecream');
console.log(modifiedFoodOne);

//Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];
let isEven = numberArray.filter(Element => Element%2==0 );
console.log(isEven);

function isPrime(numberArray){
    let prime = numberArray.filter(Element=>{
        let c=0;
        for (let index = 1; index <= Element; index++) {
            if(Element%index==0){
                c++;
            }
        }
        if(c==2)
            return true;  
        else   
            return false;
    })
    console.log(prime);
}
isPrime(numberArray);

//Function #4: Reject

function nonPrime(numberArray){
    let nonprime = numberArray.filter(Element=>{
        for (let index = 2; index < Element; index++) {
            if(Element%index==0)
                return true;  
            else   
                return false;
        }
    })
    console.log(nonprime);
}

nonPrime(numberArray);

// Function #5: Lambda
let isEven1 = numberArray.filter(Element => Element%2==0 );
console.log(isEven1);

const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = myArray.map(Element=> Element*Element);
console.log(findSquareOfNumbers);

// Function #7: Reduce
myArr1 =[2, 3, 5, 10];
let multiply = myArr1.reduce((product,Element)=>product*Element);
console.log(multiply);