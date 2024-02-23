
function processAges(ages) {
const doubledAges=[ ];
// for loop 
for (let i = 0; i < ages.length; i++) {
   doubledAges[i] = ages[i] * 2 ;
}
console.log(doubledAges);

// forEach 
ages.forEach(function(ageArray){
    console.log(ageArray);
})

// filter
let adults = ages.filter(function(ages){
    return ages >= 18;
})
console.log(adults);

// map
let agesStrings=ages.map(function (ages) { 
    return ages.toString();
    
})
console.log(agesStrings);
return { doubledAges, adults, ageStrings };
}
let ages=[25, 18, 12, 16, 40];
console.log(ages);
module.exports = processAges;
const result = processAges(ages);
console.log(result);