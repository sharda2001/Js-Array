var numbers=[50, 40, 23, 70, 56, 12, 5, 7]
var min=numbers[0];
for(var i=0; i<numbers.length; i++){
    if(numbers[i]<min){
        min=numbers[i]
    }
}
console.log(min)