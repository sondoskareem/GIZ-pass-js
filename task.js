var fs = require("fs");
var numbers = fs.readFileSync("./data.txt").toString('utf-8');
var numbers = numbers.split(",")

// console.log(numbers)

// console.log("Original numbers list: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - i - 1 ; j++)
    {
        if(numbers[j] > numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j+1] = temp
        }
    }
}

// console.log("Numbers list After sorting: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - i - 1 ; j++)
    {
        if(numbers[j] < numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j+1] = temp
        }
    }
}

console.log("Numbers list After Desc sorting: ", numbers)


