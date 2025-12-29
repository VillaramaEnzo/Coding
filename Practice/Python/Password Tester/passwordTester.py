import re
import math

def main():
    while True:
        password = input("\nEnter a password: ").strip()

        # Reject spaces
        if re.search(r"\s", password):
            print("\nInvalid password: Spaces are not allowed.")
            continue

        score = password_score(password)
        strength = password_strength(score)
        suggestions = improvement_suggestions(password)
        entropy = password_entropy(password)

        print(f"\nPassword Score: {score}/100")
        print(f"Strength: {strength}")
        print(f"It would take approximately {int(2 ** entropy):,} attempts to crack this password")

        if suggestions:
            print("\nSuggestions:")
            for suggestion in suggestions:
                print(f"- {suggestion}")
        else:
            print("\nGreat job! Your password is strong.")

        # Ask if user wants to test another password
        while True:
            continue_choice = input("\nWould you like to test another password? (yes/no): ").strip().lower()
            if continue_choice in ['yes', 'y', 'no', 'n']:
                break
            else:
                print("Please enter 'yes' or 'no'.")

        if continue_choice in ['no', 'n']:
            print("\nThank you for using the Password Tester. Goodbye!")
            break

def password_score(password: str) -> int:
    features = analyse_password(password)
    score = 0

    # Length (max 40)
    score += min(len(password) * 3, 40)

    # Composition
    score += 10 if features["lowercase"] else 0
    score += 10 if features["uppercase"] else 0
    score += 10 if features["digit"] else 0
    score += 10 if features["symbol"] else 0

    # Entropy bonus
    if features["entropy"] >= 80:
        score += 20
    elif features["entropy"] >= 60:
        score += 10

    # Penalties
    if features["repeated"]:
        score -= 10
    if features["sequential"]:
        score -= 10

    return max(score, 0)

def password_strength(score: int) -> str:
    if score >= 80:
        return "Very Strong"
    elif score >= 60:
        return "Strong"
    elif score >= 40:
        return "Moderate"
    else:
        return "Weak"

def improvement_suggestions(password: str) -> list[str]:
    features = analyse_password(password)
    suggestions = []

    if not features["length"]:
        suggestions.append("Increase length to at least 12 characters")
    if not features["uppercase"]:
        suggestions.append("Add at least one uppercase letter")
    if not features["lowercase"]:
        suggestions.append("Add at least one lowercase letter")
    if not features["digit"]:
        suggestions.append("Add at least one number")
    if not features["symbol"]:
        suggestions.append("Add at least one symbol")
    if features["repeated"]:
        suggestions.append("Avoid repeating the same character multiple times")
    if features["sequential"]:
        suggestions.append("Avoid sequential characters like 'abc' or '123'")
    if features["entropy"] < 60:
        suggestions.append("Increase overall randomness to improve entropy")

    return suggestions

def analyse_password(password: str) -> dict[str, bool | float]:
    return {
        "length": len(password) >= 12,
        "lowercase": bool(re.search(r"[a-z]", password)),
        "uppercase": bool(re.search(r"[A-Z]", password)),
        "digit": bool(re.search(r"\d", password)),
        "symbol": bool(re.search(r"[^\w\s]", password)),
        "repeated": bool(re.search(r"(.)\1{2,}", password)),
        "sequential": has_sequential_chars(password.lower()),
        "entropy": password_entropy(password),
    }


def has_sequential_chars(password: str, window_size: int = 3) -> bool:
    if len(password) < window_size:
        return False

    # Convert to lowercase for case-insensitive comparison
    password_lower = password.lower()

    for i in range(len(password_lower) - window_size + 1):
        window = password_lower[i:i + window_size]

        # increasing sequence (abc, 123)
        if all(ord(window[j + 1]) - ord(window[j]) == 1 for j in range(len(window) - 1)):
            return True

        # decreasing sequence (cba, 321)
        if all(ord(window[j]) - ord(window[j + 1]) == 1 for j in range(len(window) - 1)):
            return True

    return False


def password_entropy(password: str) -> float:
    if not password:
        return 0.0
    
    # Calculate character pool size
    pool = 0
    if re.search(r"[a-z]", password):
        pool += 26
    if re.search(r"[A-Z]", password):
        pool += 26
    if re.search(r"\d", password):
        pool += 10
    if re.search(r"[^\w\s]", password):
        pool += 32  # approximate symbol pool

    if pool == 0:
        return 0.0

    # Base entropy: theoretical maximum (assumes uniform randomness)
    base_entropy = len(password) * math.log2(pool)
    
    # Apply penalties for patterns that reduce actual entropy
    # These patterns make passwords more predictable
    penalty = 0
    
    # Check for sequential patterns (highly predictable)
    # Attackers try these patterns early in dictionary/pattern attacks
    if has_sequential_chars(password.lower()):
        penalty += base_entropy * 0.5  # Reduce by 50% - major penalty
    
    # Check for repeated characters (reduces randomness)
    if re.search(r"(.)\1{2,}", password):
        penalty += base_entropy * 0.2  # Reduce by 20%
    
    # Short passwords are easier to brute force
    # Common short passwords are tried first in attacks
    if len(password) < 8:
        penalty += base_entropy * 0.3  # Additional 30% penalty for short passwords
    elif len(password) < 12:
        penalty += base_entropy * 0.1  # 10% penalty for moderate length
    
    # Calculate adjusted entropy (can't go below 0)
    adjusted_entropy = max(base_entropy - penalty, 0)
    
    return round(adjusted_entropy, 2)


if __name__ == "__main__":
    main()