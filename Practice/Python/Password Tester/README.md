# Password Tester

A comprehensive Python application that evaluates password strength, calculates entropy, and provides actionable suggestions for improving password security.

## Features

- **Password Scoring**: Evaluates passwords on a 0-100 scale based on multiple criteria
- **Strength Classification**: Categorizes passwords as Weak, Moderate, Strong, or Very Strong
- **Entropy Calculation**: Calculates realistic password entropy accounting for patterns and predictability
- **Improvement Suggestions**: Provides specific, actionable recommendations to strengthen passwords
- **Pattern Detection**: Identifies common weak patterns like sequential characters and repeated characters
- **Interactive CLI**: User-friendly command-line interface with continuous testing capability

## Requirements

- Python 3.7 or higher
- No external dependencies (uses only Python standard library)

## Installation

1. Clone or download this repository
2. Ensure Python 3.7+ is installed on your system
3. No additional packages need to be installed

## Usage

### Running the Application

```bash
python passwordTester.py
```

### How It Works

1. Enter a password when prompted
2. The application will:
   - Calculate a password score (0-100)
   - Determine password strength level
   - Calculate entropy and estimate crack attempts
   - Provide improvement suggestions (if needed)
3. Choose to test another password or exit

### Example Session

```
Enter a password: password

Password Score: 18/100
Strength: Weak
It would take approximately 73 attempts to crack this password

Suggestions:
- Increase length to at least 12 characters
- Add at least one uppercase letter
- Add at least one number
- Add at least one symbol
- Increase overall randomness to improve entropy

Would you like to test another password? (yes/no): yes

Enter a password: K9#mP2@xL7qW4$

Password Score: 100/100
Strength: Very Strong
It would take approximately 73,786,976,294,838,206,464 attempts to crack this password

Great job! Your password is strong.

Would you like to test another password? (yes/no): no

Thank you for using the Password Tester. Goodbye!
```

## Password Scoring Criteria

The password score is calculated based on:

- **Length** (up to 40 points): Longer passwords score higher
- **Character Diversity** (up to 40 points):
  - Lowercase letters (10 points)
  - Uppercase letters (10 points)
  - Numbers (10 points)
  - Symbols (10 points)
- **Entropy Bonus** (up to 20 points): High entropy passwords get additional points
- **Penalties**:
  - Sequential characters (e.g., "abc", "123"): -10 points
  - Repeated characters (e.g., "aaa", "111"): -10 points

## Strength Levels

- **Very Strong**: Score ≥ 80
- **Strong**: Score ≥ 60
- **Moderate**: Score ≥ 40
- **Weak**: Score < 40

## Entropy Calculation

The entropy calculation uses Shannon entropy principles with realistic adjustments:

- **Base Entropy**: Calculated from password length and character pool size
- **Pattern Penalties**: 
  - Sequential patterns reduce entropy by 50%
  - Repeated characters reduce entropy by 20%
  - Short passwords (< 8 chars) get additional 30% penalty
  - Moderate length (8-11 chars) get 10% penalty

This provides a more accurate estimate of actual crack attempts compared to theoretical maximum entropy.

## Testing

Run the test suite using Python's unittest module:

```bash
python test_passwordTester.py
```

Or with verbose output:

```bash
python -m unittest test_passwordTester.py -v
```

The test suite includes 29 comprehensive tests covering:
- Password scoring
- Strength classification
- Improvement suggestions
- Entropy calculations
- Pattern detection
- Password analysis

## Project Structure

```
Password Tester/
├── passwordTester.py      # Main application
├── test_passwordTester.py # Test suite
├── requirements.txt        # Dependencies (none required)
└── README.md              # This file
```

## Functions

### Main Functions

- `main()`: Main application loop
- `password_score(password)`: Calculates password score (0-100)
- `password_strength(score)`: Returns strength label
- `improvement_suggestions(password)`: Returns list of suggestions
- `password_entropy(password)`: Calculates adjusted entropy
- `analyse_password(password)`: Analyzes password features
- `has_sequential_chars(password)`: Detects sequential patterns

## Security Notes

- This tool evaluates password strength but does not store or transmit passwords
- All processing is done locally
- Spaces are not allowed in passwords (as per common security policies)
- The entropy calculations are estimates based on common attack patterns

## License

This project is for educational purposes.

## Author

Created as a CS50P final project.

