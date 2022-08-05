const numberExercise = (a, b) => ((a == 100 || b == 100) || (a + b == 100));

// console.log(numberExercise(50, 20));
// console.log(numberExercise(50, 50));
// console.log(numberExercise(50, 100));
// console.log(numberExercise(100, 2));


function getExtension(fileName) {
    let finalString = [];
    // for (let index = fileName.length - 1; index > -1; index--) {
    //     const element = fileName[index];
    //     finalString.unshift(element);
    //     if (element === ".") {
    //         break;
    //     } 
    // }
    let arr = fileName.split("."); // ["index" , "2013", "zip"]
    return "." + arr.at(arr.length - 1);
    // //do it with the foreach callback
    // var indexOfDot = fileName.lastIndexOf(".");
    // fileName.split().forEach((element, index) => {
    //     if (index >= indexOfDot) {
    //         finalString.push(element);
    //     }
    // });
    // return finalString.join("");
}

// console.log(getExtension("index.2013.zip"))




// const alphabetPlusOne = (string) => {
//     let arr = string.split(/(?!$)/u);
//     console.log(arr)
//     return arr.charCodeAt()
// }

// console.log(alphabetPlusOne("hello"))

function potatoes(str) {
    let potatoes = (str.match(/potatoes/g) || []).length;
    return potatoes
}

// console.log(potatoes("potatoespotatoes"))


const numberGame = (num) => {

    for (var i = num - 1; i > 0; i--)
        num += i
    return num
}
// console.log(numberGame(2))


// If first word is new leave it be. If not add new at the beginning of phrase
function newString(str) {
    const myArray = str.split(" ");
    if (myArray[0] === "new") {
        return str
    } else {
        // return 'new ' + str
        return `new ${str}`

    };
}


// console.log(newString("this is a string"))
// console.log(newString("new this is a string"))



function compareTriplets(a, b) {
    let pointsA = 0
    let pointsB = 0

    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if (element > b[index]) {
            pointsA = pointsA + 1
        } else if ((element < b[index])) {
            pointsB = pointsB + 1
        }
    }
    return [pointsA, pointsB]
}

a = [1, 2, 3]
b = [3, 2, 1]


function compareTripletsForEach(a, b) {
    let pointsA = 0
    let pointsB = 0
    a.forEach(element, index => {
        if (element > b[index]) {
            pointsA = pointsA + 1
        } else if (element < b[index]) {
            pointsB = pointsB + 1
        }
    }

    )
    return [pointsA, pointsB]
}



function aVeryBigSum(ar) {
    let sum = 0
    ar.forEach((element) => {
        sum += element
    })
    return sum
}
// console.log(aVeryBigSum([2, 4, 6]))

function aVeryBigSum2(ar) {
    let sum = 0
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i]
    }
    return sum
}
// console.log(aVeryBigSum2([2, 4, 6]))



try {
    let number = 0
}
catch (err) {
    // console.log("error has been shown")
}

function aVeryBigSum3(arr) {
    let total = 0;
    for (let number of arr)
        total += number;
    return total
}
// console.log("hey", aVeryBigSum3([2, 4, 6]))



// function fizzBuzz(n) {
//     let n = 50
//     for (l et i = 1; i < n; i++)
//     if( i % 2 === 0) {
//         console.log(fizz)
//     }
// }


function isPalindrome(str) {
    const strReversed = str.split('').reverse().join('');
    return strReversed === str;
}

// function miniMaxSum(arr) {
//     let highestNumber = Math.max(...arr);
//     console.log(highestNumber)
//     let lowestNumber = Math.min(...arr);
//     let totalScore = 0
//     for (let num of arr)
//         totalScore += num
// return `${totalScore - highestNumber} ${totalScore - lowestNumber}`
// }

function miniMaxSum(arr) {
    let minSum = Math.min(...arr);
    let maxSum = Math.max(...arr);
    let total = 0
    for (let num of arr)
        total += num
    return `${total - maxSum} ${total - minSum}`
}

//console.log("hey hey", miniMaxSum([1, 2, 3, 4, 5]))

function timeConversion(s) {
    let stringWithoutLastTwoDigits = s.slice(0, -2)
    let firstTwoNumbers = s[0] + s[1];
    let intNumber = parseInt(firstTwoNumbers);
    if (s.charAt(8) === 'P') {
        return intNumber === 12 ? stringWithoutLastTwoDigits : intNumber + 12 + stringWithoutLastTwoDigits.substring(2);
    } else {
        if (intNumber === 12) {
            firstTwoNumbers = "00";
            return stringWithoutLastTwoDigits.replace(/^.{2}/g, firstTwoNumbers)
        }

    }
}
function time2(s) {
    let numberAmended = s[0] + s[1];
    if (s[8] === 'P') {
        if (numberAmended != "12") {
            numberAmended = parseInt(numberAmended) + 12;
        }
    }
    else if (numberAmended == "12") {
        numberAmended = "00";
    }
    return numberAmended + s.substring(2, 8);
}

// console.log("1", timeConversion("08:30:00PM"));
// console.log("2", timeConversion("04:50:00AM"));
// console.log("3", timeConversion("04:50:00PM"));
// console.log("4", timeConversion("12:30:00AM"));
// console.log("5", timeConversion("11:59:00AM"));
// console.log("6", timeConversion("11:59:00PM"));
// console.log("7", timeConversion("01:59:00PM"));
// console.log("8", timeConversion("12:59:00PM"));



function gradingStudents(grades) {

    let newAray = []
    for (let x of grades) {
        if (x < 38 || x % 5 === 0) {
            newAray.push(x)

        } else if
            ((x + 1) % 5 === 0 || (x + 2) % 5 === 0) {
            let roundedNumber = Math.ceil(x / 5) * 5;
            newAray.push(roundedNumber)
        } else {
            newAray.push(x)
        }
    }
    return newAray
}

console.log(gradingStudents([38, 39, 40, 41, 42, 43, 44, 45]));

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let numberOfApples = 0;
    let numberOfOranges = 0;
    for (let x of apples) {
        if ((a + x) >= s && (a + x) <= t) {
            numberOfApples = numberOfApples + 1
        }
    }
    for (let x of oranges) {
        if ((b + x) >= s && (b + x) <= t) {
            numberOfOranges = numberOfOranges + 1
        }
    }
    return `${numberOfApples}  ${numberOfOranges}`
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))

function breakingRecords(scores) {
    let numberOfHighestScores = 0;
    let numberOfLowestScores = 0;
    let highestScore = scores[1];
    let lowestScore = scores[1];
    let finalArray = []
    for (let i of scores)
        if (i > highestScore) {
            highestScore = i;
            numberOfHighestScores++
        } else {
            if (i < lowestScore) {
                lowestScore = i
                numberOfLowestScores++
            }
        }
    finalArray.push(numberOfHighestScores);
    finalArray.push(numberOfLowestScores);
    return finalArray
}


// console.log(breakingRecords([10,3,4,21,36,10,28,35,5,24,42]))


function plusMinus(arr) {
    let total = arr.length
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let num of arr)
        if (num === 0) {
            zero++
        } else if (num > 0) {
            positive++
        } else {
            negative++
        }
    let resultPositive = (positive / total).toFixed(6)
    let resultNegative = (negative / total).toFixed(6)
    let resultZero = (zero / total).toFixed(6)


    console.log(resultPositive)
    console.log(resultNegative)
    console.log(resultZero)
}
console.log(plusMinus([0, 5, 4, -1]))

function catAndMouse(x, y, z) {
    let catA = Math.abs(x - z);
    let catB = Math.abs(y - z);
    if (catA === catB) {
        return "Mouse C"
    }
    else if (catA > catB) {
        return "Cat B"
    } else {
        return "Cat A"
    }
}

console.log(catAndMouse(1, 2, 3))
console.log(catAndMouse(1, 3, 2))
console.log(catAndMouse(5, 4, 6))


function diagonalDifference(arr) {
    let result = [0, 0]
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i][0 + i],
            b = arr[i][arr.length - 1 - i]
        result = [result[0] + a, result[1] + b]
    }
    return Math.abs(result[0] - result[1])

}


console.log(diagonalDifference([[11, 2, 4,], [4, 5, 6,], [10, 8, -12]]))


function migratoryBirds(arr) {
    let typeOne = 0;
    let typeTwo = 0;
    let typeThree = 0;
    let typeFour = 0;
    let typeFive = 0;
    let types = [typeOne, typeTwo, typeThree, typeFour, typeFive]

    for (let bird of arr) {
        if (bird === 1) {
            types[0]++
        } else if (bird === 2) {
            types[1]++
        } else if (bird === 3) {
            types[2]++
        } else if (bird === 4) {
            types[3]++
        } else {
            types[4]++
        }
    }

    let mode = types.indexOf((Math.max(...types)))
    return mode + 1
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3,]))