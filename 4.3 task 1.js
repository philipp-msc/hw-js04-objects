const parentObj = { x: 'parentProp'}
const obj1 = Object.create(parentObj)
obj1.a = 'abc'
obj1.b = 123
obj1.c = true


function getAll(obj) {
 for (let key in obj){
    if( obj.hasOwnProperty(key)){
    console.log(`key: ${key}, value: ${obj[key]}`);
    }
 }   
}

getAll(obj1)