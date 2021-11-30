var list1 = [1,2,3,4,5,6,9,33]
var list2 = [2,3,1,0,6,7,8]
list3=[]
for(var i of list1){
    if(!list2.includes(i)){
        list3.push(i)
    }
}
console.log(list3);