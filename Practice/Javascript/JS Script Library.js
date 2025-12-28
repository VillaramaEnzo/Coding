
// 1. Print all even numbers 0 - 10
// extension:  Print all even numbers n - n 
const even_numbers = (a, b) => {
   for (a; a <= b; a+=2 ) {
       console.log(a);
   }
}; 

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

// 3. Metric Conversion
// Only doing Metric System as it's the only system that matters.... 
// Extension: Metrics conversion (Length, Speed, Time, Weight)  
const metric_conversion = (x, type, measure, conv) => {
    
    let result;
    let error = null;
    
    if (type == "length"){
        
        result = length(x, measure, conv);
        
    } else if (type == "speed") {
        
        result = speed(x, measure, conv);
        
    } else if (type == "time") {
        
        result = time(x, measure, conv);
        
    } else if (type == "weight") {
        
        result = weight(x, measure, conv);
        
    } else {
        
        return "Invalid type. Use: length, speed, time, or weight";
        
    }
    
    // Check if result is an error message (string starting with "Invalid")
    if (typeof result === 'string' && result.startsWith("Invalid")) {
        return result;
    }
    
    // Format the output nicely
    return `${x} ${measure} = ${result} ${conv}`;
    
}
// 3.1 Length Conversion
const length = (x, measure, conv) => {
    
    // mm
    // mm : cm = 1 : 0.1
    // mm : M = 1 : 0.001
    // mm : KM = 1 : 0.000001
    
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
    
    // Convert to base unit (meters) first, then to target unit
    const toMeters = {
        'mm': x * 0.001,
        'cm': x * 0.01,
        'M': x,
        'KM': x * 1000
    };
    
    const fromMeters = {
        'mm': (val) => val * 1000,
        'cm': (val) => val * 100,
        'M': (val) => val,
        'KM': (val) => val * 0.001
    };
    
    if (!toMeters.hasOwnProperty(measure) || !fromMeters.hasOwnProperty(conv)) {
        return "Invalid unit. Use: mm, cm, M, or KM";
    }
    
    const meters = toMeters[measure];
    const result = fromMeters[conv](meters);
    
    return result;
}
// 3.2 Speed Conversion
const speed = (x, measure, conv) => {
    
    // Mps (meters per second)
    // Mps : Kph = 1 : 3.6
    
    // Kph (kilometers per hour)
    // Kph : Mps = 1 : 0.277778
    
    const conversions = {
        'Mps': {
            'Kph': (val) => val * 3.6,
            'Mps': (val) => val
        },
        'Kph': {
            'Mps': (val) => val * 0.277778,
            'Kph': (val) => val
        }
    };
    
    if (!conversions.hasOwnProperty(measure) || !conversions[measure].hasOwnProperty(conv)) {
        return "Invalid unit. Use: Mps or Kph";
    }
    
    return conversions[measure][conv](x);
}
// 3.3 Time Conversion
const time = (x, measure, conv) => {
    
    // ms (milliseconds)
    // s (seconds)
    // M (minutes)
    // H (hours)
    // D (days)
    // W (weeks)
    // Mo (months - using 30 days)
    // Y (years - using 365 days)
    
    // Convert to base unit (seconds) first, then to target unit
    const toSeconds = {
        'ms': x * 0.001,
        's': x,
        'M': x * 60,
        'H': x * 3600,
        'D': x * 86400,
        'W': x * 604800,
        'Mo': x * 2592000,  // 30 days
        'Y': x * 31536000   // 365 days
    };
    
    const fromSeconds = {
        'ms': (val) => val * 1000,
        's': (val) => val,
        'M': (val) => val / 60,
        'H': (val) => val / 3600,
        'D': (val) => val / 86400,
        'W': (val) => val / 604800,
        'Mo': (val) => val / 2592000,
        'Y': (val) => val / 31536000
    };
    
    if (!toSeconds.hasOwnProperty(measure) || !fromSeconds.hasOwnProperty(conv)) {
        return "Invalid unit. Use: ms, s, M, H, D, W, Mo, or Y";
    }
    
    const seconds = toSeconds[measure];
    const result = fromSeconds[conv](seconds);
    
    return result;
}
// 3.4 Weight Conversion
const weight = (x, measure, conv) => {
    
    // g (grams)
    // g : Kg = 1 : 0.001
    // g : T = 1 : 0.000001
    
    // Kg (kilograms)
    // Kg : g = 1 : 1000
    // Kg : T = 1 : 0.001
    
    // T (metric tons)
    // T : g = 1 : 1000000
    // T : Kg = 1 : 1000 
    
    // Convert to base unit (grams) first, then to target unit
    const toGrams = {
        'g': x,
        'Kg': x * 1000,
        'T': x * 1000000
    };
    
    const fromGrams = {
        'g': (val) => val,
        'Kg': (val) => val * 0.001,
        'T': (val) => val * 0.000001
    };
    
    if (!toGrams.hasOwnProperty(measure) || !fromGrams.hasOwnProperty(conv)) {
        return "Invalid unit. Use: g, Kg, or T";
    }
    
    const grams = toGrams[measure];
    const result = fromGrams[conv](grams);
    
    return result;
}

// 4. Function that calculates the sum of numbers within an array
const sumArr = (arr) => {
    
    let  x = 0;
    
    for (let i = 0; i < arr.length; i++) {
        
        x += arr[i]
        
    }
    
    return x

}

// 5. Function that reverses the order of an array
const reverseArr = (arr) => {
    
    const reversed = [...arr];
    
    for (let i = 0; i < Math.floor(reversed.length / 2); i++) {
        [reversed[i], reversed[reversed.length - 1 - i]] = 
        [reversed[reversed.length - 1 - i], reversed[i]];
    }
    
    return reversed;
    
}


// 6. Sort an array from lowest to highest
// Extension: Explore different types of sorts
const sortArr = (arr) => {
    
    return arr.sort((a, b) => a - b);
    
}

// 6.1 Bubble Sort
const bubbleSort = (arr) => {
    
    return arr.sort((a, b) => a - b);
    
}

// 6.2 Quick Sort
const quickSort = (arr) => {
    
    return arr.sort((a, b) => a - b);

}

// 6.3 Merge Sort
const mergeSort = (arr) => {
    
    return arr.sort((a, b) => a - b);
    
}

// 6.4 Radix Sort
const radixSort = (arr) => {
    
    return arr.sort((a, b) => a - b);
    
}

// 6.5 Selection Sort
const selectionSort = (arr) => {
    
    return arr.sort((a, b) => a - b);
    
}

// 6.6 Insertion Sort
const insertionSort = (arr) => {
    
    return arr.sort((a, b) => a - b);
    
}

// 6.7 Heap Sort
const heapSort = (arr) => {
    
    return arr.sort((a, b) => a - b);
    
}

// 6.8 Shell Sort
const shellSort = (arr) => {
    
    return arr.sort((a, b) => a - b);
    
}

// 7. Create a function that filters out negative numbers

// 8. Remove spaces found in a string

// 9. Return a Boolean if a numeber if divisible by 10
// Extension: returen if divisible by X


// 10. Return the number of vowels in a string



// 11. Format words to Title Case
function formatWords(str) {

    const lowerCase = str.toLowerCase();
    const words = lowerCase.split(" ");

    return Array.map( 
        
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
        
    ).join(" ");

}




// ============================================
// CLI Menu System
// ============================================

const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to prompt user
const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

// Function registry with preset data
const functionRegistry = {
    'even_numbers': {
        func: even_numbers,
        description: 'Print all even numbers from a to b',
        params: ['a', 'b'],
        preset: { a: 0, b: 10 }
    },
    'multiplication_table': {
        func: multiplication_table,
        description: 'Print multiplication table from a to b',
        params: ['a', 'b'],
        preset: { a: 1, b: 4 }
    },
    'metric_conversion': {
        func: metric_conversion,
        description: 'Convert between metric units (length, speed, time, weight)',
        params: ['x', 'type', 'measure', 'conv'],
        preset: { x: 10, type: 'length', measure: 'mm', conv: 'cm' }
    },
    'sumArr': {
        func: sumArr,
        description: 'Calculate sum of numbers in an array',
        params: ['arr'],
        preset: { arr: [2, 4, 6, 8] }
    },
    'reverseArr': {
        func: reverseArr,
        description: 'Reverse the order of an array',
        params: ['arr'],
        preset: { arr: [1, 2, 3, 4, 5] }
    },
    'formatWords': {
        func: formatWords,
        description: 'Format words to Title Case',
        params: ['str'],
        preset: { str: 'helLo woRld HoW aRe yoU' }
    }
};

// Fuzzy search function - finds functions by name similarity
const searchFunctions = (searchTerm) => {
    const functions = Object.keys(functionRegistry);
    const term = searchTerm.toLowerCase();
    
    // Score functions based on similarity
    const scored = functions.map(name => {
        const lowerName = name.toLowerCase();
        let score = 0;
        
        // Exact match gets highest score
        if (lowerName === term) {
            score = 100;
        }
        // Starts with search term
        else if (lowerName.startsWith(term)) {
            score = 80;
        }
        // Contains search term
        else if (lowerName.includes(term)) {
            score = 60;
        }
        // Check if all characters of search term appear in order (fuzzy match)
        else {
            let nameIndex = 0;
            let matches = 0;
            for (let i = 0; i < term.length; i++) {
                const char = term[i];
                while (nameIndex < lowerName.length) {
                    if (lowerName[nameIndex] === char) {
                        matches++;
                        nameIndex++;
                        break;
                    }
                    nameIndex++;
                }
            }
            if (matches === term.length) {
                score = 40;
            }
        }
        
        return { name, score };
    });
    
    // Filter out non-matches and sort by score
    return scored
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.name);
};

// Search menu
const searchMenu = async () => {
    const searchTerm = await askQuestion('\nEnter search term: ');
    
    if (!searchTerm || !searchTerm.trim()) {
        console.log('Search term cannot be empty.');
        return null;
    }
    
    const results = searchFunctions(searchTerm);
    
    if (results.length === 0) {
        console.log('\nNo functions found matching your search.');
        await askQuestion('Press Enter to continue...');
        return null;
    }
    
    // Display search results
    console.log(`\n${'='.repeat(50)}`);
    console.log(`Found ${results.length} matching function(s):`);
    console.log('='.repeat(50) + '\n');
    
    results.forEach((name, index) => {
        const funcInfo = functionRegistry[name];
        console.log(`${index + 1}. ${name}() / ${funcInfo.description}`);
    });
    
    console.log(`${results.length + 1}. ← Back to menu`);
    console.log('-'.repeat(50));
    
    const choice = await askQuestion('\nSelect a function (number): ');
    const index = parseInt(choice) - 1;
    
    if (index >= 0 && index < results.length) {
        return results[index];
    } else if (index === results.length) {
        return null; // Back to menu
    } else {
        console.log('Invalid choice.');
        return null;
    }
};

// Display menu with pagination
const displayMenu = (currentPage = 0) => {
    const functions = Object.keys(functionRegistry);
    const functionsPerPage = 5;
    const totalPages = Math.ceil(functions.length / functionsPerPage);
    
    const startIndex = currentPage * functionsPerPage;
    const endIndex = Math.min(startIndex + functionsPerPage, functions.length);
    const pageFunctions = functions.slice(startIndex, endIndex);
    
    console.log('\n' + '='.repeat(50));
    console.log(`JavaScript Function Library | Page ${currentPage + 1} / ${totalPages}`);
    console.log('='.repeat(50) + '\n');
    
    // Display functions for current page
    pageFunctions.forEach((name, pageIndex) => {
        const actualIndex = startIndex + pageIndex;
        const funcInfo = functionRegistry[name];
        console.log(`${pageIndex + 1}. ${name}() / ${funcInfo.description}`);
    });
    
    // Display navigation options if multiple pages
    let optionNumber = pageFunctions.length + 1;
    if (totalPages > 1) {
        console.log('');
        if (currentPage > 0) {
            console.log(`${optionNumber}. ← Previous page`);
            optionNumber++;
        }
        if (currentPage < totalPages - 1) {
            console.log(`${optionNumber}. Next page →`);
            optionNumber++;
        }
    }
    
    // Display Search and Exit
    console.log('');
    console.log(`s. Search functions`);
    console.log('');
    console.log(`0. Exit`);
    console.log('-'.repeat(50));
};

// Get unit hints for metric conversion
const getUnitHints = (type) => {
    const unitHints = {
        'length': 'mm, cm, M, KM',
        'speed': 'Mps, Kph',
        'time': 'ms, s, M, H, D, W, Mo, Y',
        'weight': 'g, Kg, T'
    };
    return unitHints[type] || 'unit abbreviation';
};

// Get user input for a parameter with descriptive prompts
const getParamInput = async (paramName, paramType = 'string', funcName = '', context = {}) => {
    let question = '';
    let hint = '';
    
    // Provide hints based on parameter name and function
    if (funcName === 'metric_conversion') {
        if (paramName === 'x') {
            hint = ' (number - value to convert)';
        } else if (paramName === 'type') {
            hint = ' (length, speed, time, or weight)';
        } else if (paramName === 'measure' || paramName === 'conv') {
            // Use context to provide specific unit hints if type is already known
            if (context.type) {
                const units = getUnitHints(context.type);
                hint = ` (${units})`;
            } else {
                hint = ' (unit abbreviation - depends on type)';
            }
        }
    } else if (paramName === 'a' || paramName === 'b') {
        hint = ' (number)';
    } else if (paramName === 'arr') {
        hint = ' (comma-separated values, e.g., 1, 2, 3, 4)';
    }
    
    // Build descriptive question
    if (paramType === 'number') {
        question = `Enter ${paramName}${hint || ' (number)'}: `;
    } else if (paramType === 'array') {
        question = `Enter ${paramName}${hint || ' (comma-separated values)'}: `;
    } else {
        question = `Enter ${paramName}${hint || ' (text)'}: `;
    }
    
    const input = await askQuestion(question);
    
    if (paramType === 'number') {
        const num = parseFloat(input);
        if (isNaN(num)) {
            console.log('  ⚠️  Invalid number, using 0 as default');
            return 0;
        }
        return num;
    } else if (paramType === 'array') {
        // Parse comma-separated values
        if (!input.trim()) {
            console.log('  ⚠️  Empty input, using empty array');
            return [];
        }
        return input.split(',').map(item => {
            const trimmed = item.trim();
            const num = parseFloat(trimmed);
            return isNaN(num) ? trimmed : num;
        });
    }
    return input;
};

// Execute function with parameters
const executeFunction = async (funcName) => {
    const funcInfo = functionRegistry[funcName];
    if (!funcInfo) {
        console.log('Function not found!');
        return;
    }
    
    console.log(`\n${'='.repeat(50)}`);
    console.log(`Function: ${funcName}`);
    console.log(`Description: ${funcInfo.description}`);
    console.log('='.repeat(50));
    
    // Ask if user wants to use preset or custom input
    const usePreset = await askQuestion('\nUse preset data? (y/n): ');
    
    let args = [];
    
    if (usePreset.toLowerCase() === 'y' || usePreset === 'yes') {
        // Use preset data
        console.log('\nUsing preset data:');
        funcInfo.params.forEach(param => {
            console.log(`  ${param}: ${JSON.stringify(funcInfo.preset[param])}`);
            args.push(funcInfo.preset[param]);
        });
    } else {
        // Get custom input
        console.log('\nEnter custom parameters:');
        const context = {}; // Store context for dependent parameters (e.g., type for metric_conversion)
        
        for (const param of funcInfo.params) {
            // Determine param type based on preset example
            const presetValue = funcInfo.preset[param];
            const paramType = Array.isArray(presetValue) ? 'array' : 
                            typeof presetValue === 'number' ? 'number' : 'string';
            
            const value = await getParamInput(param, paramType, funcName, context);
            args.push(value);
            
            // Store context for dependent parameters
            if (funcName === 'metric_conversion' && param === 'type') {
                context.type = value;
            }
        }
    }
    
    // Execute function
    console.log('\n' + '-'.repeat(50));
    console.log('Result:');
    console.log('-'.repeat(50));
    
    try {
        const result = funcInfo.func(...args);
        if (result !== undefined) {
            console.log(result);
        }
    } catch (error) {
        console.log('Error:', error.message);
    }
    
    console.log('-'.repeat(50));
};

// Main CLI loop
const runCLI = async () => {
    const functions = Object.keys(functionRegistry);
    const functionsPerPage = 5;
    const totalPages = Math.ceil(functions.length / functionsPerPage);
    let currentPage = 0;
    
    while (true) {
        displayMenu(currentPage);
        
        const startIndex = currentPage * functionsPerPage;
        const endIndex = Math.min(startIndex + functionsPerPage, functions.length);
        const pageFunctions = functions.slice(startIndex, endIndex);
        
        // Calculate option numbers (Exit is displayed as 0, but internally it's the last option)
        let maxOption = pageFunctions.length;
        const hasPrevPage = totalPages > 1 && currentPage > 0;
        const hasNextPage = totalPages > 1 && currentPage < totalPages - 1;
        
        if (hasPrevPage) maxOption++;
        if (hasNextPage) maxOption++;
        const exitOptionNum = maxOption; // Exit is the last numbered option (but displayed as 0)
        
        const choice = await askQuestion('\nSelect an option (number, "s" to search, or "exit"/"0" to quit): ');
        const choiceLower = choice.toLowerCase().trim();
        
        // Handle search command
        if (choiceLower === 's') {
            const selectedFunction = await searchMenu();
            if (selectedFunction) {
                await executeFunction(selectedFunction);
                
                const continueChoice = await askQuestion('\nPress Enter to return to menu, or type "exit" to quit: ');
                if (continueChoice.toLowerCase() === 'exit') {
                    console.log('\nExiting... Goodbye!\n\n');
                    rl.close();
                    break;
                }
            }
            continue;
        }
        
        // Handle exit commands
        if (choiceLower === 'exit' || choiceLower === '0') {
            console.log('\nExiting... Goodbye!');
            rl.close();
            break;
        }
        
        const optionNum = parseInt(choice);
        
        // Check if it's Exit by option number
        if (optionNum === exitOptionNum) {
            console.log('\nExiting... Goodbye!');
            rl.close();
            break;
        }
        
        if (isNaN(optionNum) || optionNum < 1 || optionNum > maxOption) {
            console.log('\nInvalid choice! Please try again.');
            continue;
        }
        
        // Determine what was selected
        let selectedIndex = optionNum - 1;
        
        // Check if it's a function on current page
        if (selectedIndex < pageFunctions.length) {
            const actualIndex = startIndex + selectedIndex;
            await executeFunction(functions[actualIndex]);
            
            const continueChoice = await askQuestion('\nPress Enter to return to menu, or type "exit" to quit: ');
            if (continueChoice.toLowerCase() === 'exit') {
                console.log('\nExiting... Goodbye!');
                rl.close();
                break;
            }
            continue;
        }
        
        // Check if it's page navigation
        selectedIndex -= pageFunctions.length;
        if (hasPrevPage && selectedIndex === 0) {
            currentPage--;
            continue;
        }
        if (hasNextPage && selectedIndex === (hasPrevPage ? 1 : 0)) {
            currentPage++;
            continue;
        }
    }
};

// Run CLI if this file is executed directly
if (require.main === module) {
    runCLI();
}
