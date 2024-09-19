// 10 Javascript challenges for beginners

// 1. Print all even numbers 0 - 10
// extension:  Print all even numbers n - n 
const even_numbers = (a, b) => {
   for (a; a <= b; a+=2 ) {
       console.log(a);
   }
}; 

//even_numbers(0, 10); 

// 2.  Print table containing multiplication tables

const multiplication_table = (a, b) => {
    for (i = a; i <= b; i++) {
        let row = "";
        for (j = a;  j <= b; j++) {
            row += `${i * j} \t`; 
        }
    console.log(row);
    }
} 
 let  a = 1, b = 4;

//multiplication_table(a, b);

// 3. Length Conversion
// Extension: Metrics conversion (Length, Speed, Time, Weight)  

const length = (x, measure, conv) => {
    
    // mm
    // mm : cm = 1 : 0.1
    // mm : M = 1 : 0.001
    // mm : KM = 1 : 0.00001
    
    console.log(x)
    
    // cm
    // cm : mm = 1 : 10
    // cm : M = 1 : 0.01
    // cm : KM = 1 : 0.00001
    
    // M
    // M : mm = 1 : 1000
    // M : cm = 1 : 100
    // M : KM = 1 : 0.001
    
    // KM
    // KM : mm = 1 : 1000000
    // KM : cm = 1 : 100000
    // KM : M = 1 : 1000
    
}


const speed = (x, measure, conv) => {
    
    // Mps
    // Mps : Kph = 1 : 3.6
    
    // Kph
    // Kph : Mps = 1 : 0,277778

}

const time = (x, measure, conv) => {
    
    // ms
    // s
    // M
    // H
    // D
    // W
    // Mo
    // Y
    
}

const weight = (x, measure, conv) => {
    
    // g
    // g : Kg = 1 : 0.001
    // g : T = 1 : 0.000001
    
    // Kg
    // Kg : g = 1 : 1000
    // Kg : T = 1 : 0.001
    
    // T
    // T : g = 1 : 1000000
    // T : Kg = 1 : 1000 
    
}



// Only doing Metric System as it's the only system that matters.... 
const metric_conversion = (x, type, measure, conv) => {
    
    if (type == "length"){
        
        length(x, measure, conv);
        
    } else if (type == "speed") {
        
        speed(x, measure, conv);
        
    }
    
    
    
}

//let x = 10, type = "length", measure = "mm", conv = "cm"; 
// metric_conversion(x, type, measure, conv); 

// 4. Function that calculates the sum of numbers within an array

const sumArr = (arr) => {
    
    let  x = 0;
    
    for (let i = 0; i < arr.length; i++) {
        
        x += arr[i]
        
    }
    
    return x

}

//let arr = [2, 4, 6, 8]
//console.log(sumArr(arr))


// 5. Function that reverses the order of an array

// 6. Sort an array from lowest to highest
// Extension: Explore different types of sorts

// 7. Create a function that filters out negative numbers

// 8. Remove spaces found in a string

// 9. Return a Boolean if a numeber if divisible by 10
// Extension: returen if divisible by X


// 10. Return the number of vowels in a string

