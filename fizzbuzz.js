function fizzBuzz(n) {
    for (let i = 0; i < n;)
        console.log((++i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)
}

fizzBuzz(3)
fizzBuzz(8)
fizzBuzz(15)
fizzBuzz(9)
fizzBuzz(1)
