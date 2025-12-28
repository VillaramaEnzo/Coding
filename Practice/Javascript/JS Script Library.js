
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
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
    
}

// 6.2 Quick Sort
const quickSort = (arr) => {
    
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(num => num < pivot);
    const middle = arr.filter(num => num === pivot);
    const right = arr.filter(num => num > pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)];

}

// 6.3 Merge Sort
// Helper function for merge sort
const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const mergeSort = (arr) => {
    
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
    
}

// 6.4 Radix Sort
const radixSort = (arr) => {
    if (arr.length === 0) return arr;
    
    const max = Math.max(...arr.map(Math.abs));
    const maxDigits = max === 0 ? 1 : Math.floor(Math.log10(max)) + 1;
    
    for (let digit = 0; digit < maxDigits; digit++) {
        const buckets = Array.from({ length: 10 }, () => []);
        
        for (let i = 0; i < arr.length; i++) {
            const digitValue = Math.floor(Math.abs(arr[i]) / Math.pow(10, digit)) % 10;
            buckets[digitValue].push(arr[i]);
        }
        
        arr = [].concat(...buckets);
    }
    
    return arr;
}

// 6.5 Selection Sort
const selectionSort = (arr) => {
    
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return arr;
    
}

// 6.6 Insertion Sort
const insertionSort = (arr) => {
    
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// 6.7 Heap Sort
// Helper function for heap sort
const heapify = (arr, n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

const heapSort = (arr) => {
    // Build max heap
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i);
    }
    
    // Extract elements from heap
    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    
    return arr;
}

// 6.8 Shell Sort
const shellSort = (arr) => {
    
    let gap = Math.floor(arr.length / 2);
    
    while (gap > 0) {
        for (let i = gap; i < arr.length; i++) {
            let temp = arr[i];
            let j = i;
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    
    return arr;
    
}

// 7. Create a function that filters out negative numbers
function filterOutNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}
// 8. Remove spaces found in a string
function removeSpaces(str) {
    return str.replace(/\s/g, '');
}

// 9. Return a Boolean if a numeber if divisible by 10
// Extension: returen if divisible by X
function isDivisible(number, divisor = 10) {

    return number % divisor === 0;
}

// 10. Return the number of vowels in a string
function returnVowels(str) {
    return str.match(/[aeiou]/gi).length;
}

// 11. Format words to Title Case
function formatWords(str) {
    if (!str || typeof str !== 'string') {
        return '';
    }
    
    const trimmed = str.trim();
    if (trimmed === '') {
        return '';
    }
    
    const lowerCase = trimmed.toLowerCase();
    const words = lowerCase.split(/\s+/).filter(word => word.length > 0);

    return words.map( 
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

// Enable keypress events for stdin
readline.emitKeypressEvents(process.stdin);

// Helper function to prompt user
const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

// Helper function to prompt user with arrow key support
const askQuestionWithArrows = (question, hasPrevPage, hasNextPage) => {
    return new Promise((resolve) => {
        // Pause readline to take control
        rl.pause();
        
        // Enable raw mode for keypress events
        const wasRaw = process.stdin.isRaw;
        if (!wasRaw) {
            process.stdin.setRawMode(true);
        }
        process.stdin.resume();
        
        let userInput = '';
        let isResolved = false;
        let lastKeyTime = 0;
        let lastKeySequence = '';
        
        const cleanup = () => {
            if (isResolved) return;
            isResolved = true;
            process.stdin.removeListener('keypress', onKeypress);
            if (!wasRaw) {
                process.stdin.setRawMode(false);
            }
            process.stdin.pause();
            rl.resume();
        };
        
        const onKeypress = (str, key) => {
            if (isResolved) return;
            
            // Prevent duplicate keypress events (same key within 50ms)
            const now = Date.now();
            if (key.sequence === lastKeySequence && (now - lastKeyTime) < 50) {
                return;
            }
            lastKeyTime = now;
            lastKeySequence = key.sequence;
            
            // Handle arrow keys
            if (key.name === 'left' && hasPrevPage) {
                cleanup();
                process.stdout.write('\n');
                resolve('ARROW_LEFT');
                return;
            }
            
            if (key.name === 'right' && hasNextPage) {
                cleanup();
                process.stdout.write('\n');
                resolve('ARROW_RIGHT');
                return;
            }
            
            // Handle Enter/Return
            if (key.name === 'return' || key.name === 'enter') {
                cleanup();
                process.stdout.write('\n');
                resolve(userInput.trim());
                return;
            }
            
            // Handle Ctrl+C
            if (key.ctrl && key.name === 'c') {
                cleanup();
                process.stdout.write('\n');
                process.exit();
                return;
            }
            
            // Handle backspace/delete
            if (key.name === 'backspace' || key.name === 'delete') {
                if (userInput.length > 0) {
                    userInput = userInput.slice(0, -1);
                    process.stdout.write('\b \b');
                }
                return;
            }
            
            // Regular character input - only process if it's a single printable character
            if (str && str.length === 1) {
                const charCode = str.charCodeAt(0);
                // Only handle printable ASCII characters (32-126)
                if (charCode >= 32 && charCode <= 126) {
                    userInput += str;
                    process.stdout.write(str);
                }
            }
        };
        
        process.stdout.write(question);
        process.stdin.on('keypress', onKeypress);
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
            console.log(`${optionNumber}. ← Previous page (or ← arrow key)`);
            optionNumber++;
        }
        if (currentPage < totalPages - 1) {
            console.log(`${optionNumber}. Next page → (or → arrow key)`);
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
        
        // Calculate option numbers
        let maxOption = pageFunctions.length;
        const hasPrevPage = totalPages > 1 && currentPage > 0;
        const hasNextPage = totalPages > 1 && currentPage < totalPages - 1;
        
        if (hasPrevPage) maxOption++;
        if (hasNextPage) maxOption++;
        
        const choice = await askQuestionWithArrows('\nSelect an option (number, "s" to search, ←/→ arrows to navigate, or "exit"/"0" to quit): ', hasPrevPage, hasNextPage);
        const choiceLower = choice.toLowerCase().trim();
        
        // Handle arrow key navigation
        if (choice === 'ARROW_LEFT' && hasPrevPage) {
            currentPage--;
            continue;
        }
        
        if (choice === 'ARROW_RIGHT' && hasNextPage) {
            currentPage++;
            continue;
        }
        
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
