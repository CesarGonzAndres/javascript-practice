let data = require('./FILE.JSON');
data = data.features;
const duplicate = data;
data.map(item => duplicate.push(item))
data.map(item => duplicate.push(item))
data.map(item => duplicate.push(item))
data.map(item => duplicate.push(item))
data.map(item => duplicate.push(item))
data.map(item => duplicate.push(item))
const portion = (Object.keys(duplicate).length * 40) / 100;

// Looping Through the Array
function chunkArray1(array, size) {
    let result = []
    for (value of array){
        let lastArray = result[result.length -1 ]
        if(!lastArray || lastArray.length == size){
            result.push([value])
        } else{
            lastArray.push(value)
        }
    }
    return result
}

// Looping Through the Number of Chunks
function chunkArray2(array, size) {
    let result = []
    let arrayCopy = [...array]
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }
    return result
}

// Using .slice()
function chunkArray3(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }
    return result
}

// Recursion
function chunkArray4(array, size) {
    if(array.length <= size){
        return [array]
    }
    return [array.slice(0,size), ...chunkArray4(array.slice(size), size)]
}

const testingTime = (fn, nombre) => {
    const startTime1 = new Date().getTime();
    fn(duplicate, portion);
    const endTime1 = new Date().getTime();
    console.log(nombre + ": " + (endTime1 - startTime1) + "ms");
};

testingTime(chunkArray1, 'chunkArray1');
testingTime(chunkArray2, 'chunkArray2');
testingTime(chunkArray3, 'chunkArray3');
testingTime(chunkArray4, 'chunkArray4');
console.log('Cantidad de registros', duplicate.length);
