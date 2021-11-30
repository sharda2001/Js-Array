var paise = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
count_crorepati=0
count_lakhpati=0
count_dilwale=0
for(var i of paise){
    if(i>=100000000){
       count_crorepati++
    }
    else if(i<10000000 && i>100000){
        count_lakhpati++
    }
    else{
        count_dilwale++
    }
}
console.log(count_crorepati)
console.log(count_lakhpati)
console.log(count_dilwale)