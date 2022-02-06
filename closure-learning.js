// Closures example
function createCounter() {
    let counter = 0;
    return function increment() {
        counter = counter + 1;
        return counter;
    }
}

const counting1 = createCounter();
counting1() // 1
counting1() // 2
// creating the second counting to protect the variables inside.
const counting2 = createCounter();
console.log(counting2()); // 1

// Another Example
const defaultStyle = 'color: white;';
function createMesagePrinter(type, styles) {
    return function mesage() {
        console.log(`%c ${type}: ${str}`, defaultStyle + styles);
    }
}

const error = createMesagePrinter('Error', 'background: red;')
const success = createMesagePrinter('Success', 'background: green;')
const info = createMesagePrinter('Info', 'background: blue;')
const warning = createMesagePrinter('Warning', 'background: orange;')
