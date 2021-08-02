const array = [1, 2, 10, 16];

//ForEach
const double = [];
const newArray = array.forEach(num =>{
    double.push(num*2);
});

//map
const mapArray = array.map(num => num*2);

//filter
const filterArray = array.filter(num => {
    return num > 5;
});

