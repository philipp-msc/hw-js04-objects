obj1 = {abc: 123, def: 456, ghi: 789};
str1 = 'def';

function checkObj(obj, str){
    for (let key in obj){
        if (key === str){
            return true;
        }
    }return false;
}

let res = checkObj(obj1, str1)
console.log(res)