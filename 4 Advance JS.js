const array = [1, 2, 10, 16];

//ForEach
const double = [];
const newArray = array.forEach(num =>{
    double.push(num*2);
});

//map -- returns the array
const mapArray = array.map(num => num*2);

//filter -- condition
const filterArray = array.filter(num => {
    return num > 5;
});

//reduce -- remembers the last value
const reduceArray = array.reduce(accumulator, num => {
    return accumulator + num;
}, 0); //accumulator starts in 0