import unittest
from passwordTester import (
    password_score,
    password_strength,
    improvement_suggestions,
    password_entropy,
    has_sequential_chars,
    analyse_password
)


class TestPasswordScore(unittest.TestCase):
    """Test password_score function"""
    
    def test_password_score_strong(self):
        """Test that strong passwords get high scores"""
        strong_password = "Str0ng!Pass2025"
        score = password_score(strong_password)
        self.assertGreaterEqual(score, 70, f"Expected score >= 70, got {score}")

    def test_password_score_weak(self):
        """Test that weak passwords get low scores"""
        weak_password = "password"
        score = password_score(weak_password)
        self.assertLess(score, 40, f"Expected score < 40, got {score}")

    def test_password_score_very_strong(self):
        """Test very strong password with all features"""
        very_strong = "K9#mP2@xL7qW4$"
        score = password_score(very_strong)
        self.assertGreaterEqual(score, 80, f"Expected score >= 80, got {score}")

    def test_password_score_with_penalties(self):
        """Test that passwords with patterns get penalized"""
        # Password with sequential characters
        sequential = "abc123XYZ"
        score_seq = password_score(sequential)
        
        # Similar length but random
        random = "K9#mP2@x"
        score_rand = password_score(random)
        
        self.assertGreater(score_rand, score_seq, "Random password should score higher than sequential")

    def test_password_score_repeated_chars(self):
        """Test that repeated characters reduce score"""
        repeated = "aaa111BBB"
        score = password_score(repeated)
        self.assertLess(score, 50, f"Repeated characters should reduce score, got {score}")

    def test_password_score_empty(self):
        """Test empty password"""
        score = password_score("")
        self.assertEqual(score, 0, f"Empty password should score 0, got {score}")


class TestPasswordStrength(unittest.TestCase):
    """Test password_strength function"""
    
    def test_password_strength_labels(self):
        """Test all strength labels"""
        self.assertEqual(password_strength(20), "Weak")
        self.assertEqual(password_strength(35), "Weak")
        self.assertEqual(password_strength(45), "Moderate")
        self.assertEqual(password_strength(55), "Moderate")
        self.assertEqual(password_strength(65), "Strong")
        self.assertEqual(password_strength(75), "Strong")
        self.assertEqual(password_strength(85), "Very Strong")
        self.assertEqual(password_strength(100), "Very Strong")

    def test_password_strength_boundaries(self):
        """Test strength boundaries"""
        self.assertEqual(password_strength(39), "Weak")
        self.assertEqual(password_strength(40), "Moderate")
        self.assertEqual(password_strength(59), "Moderate")
        self.assertEqual(password_strength(60), "Strong")
        self.assertEqual(password_strength(79), "Strong")
        self.assertEqual(password_strength(80), "Very Strong")


class TestImprovementSuggestions(unittest.TestCase):
    """Test improvement_suggestions function"""
    
    def test_improvement_suggestions_weak_password(self):
        """Test suggestions for weak password"""
        suggestions = improvement_suggestions("password")
        self.assertGreater(len(suggestions), 0, "Weak password should have suggestions")
        self.assertIn("Add at least one uppercase letter", suggestions)
        self.assertIn("Add at least one number", suggestions)
        self.assertIn("Add at least one symbol", suggestions)

    def test_improvement_suggestions_short_password(self):
        """Test suggestions for short password"""
        suggestions = improvement_suggestions("Pass1!")
        self.assertIn("Increase length to at least 12 characters", suggestions)

    def test_improvement_suggestions_sequential(self):
        """Test suggestions for sequential patterns"""
        suggestions = improvement_suggestions("abc123")
        self.assertIn("Avoid sequential characters like 'abc' or '123'", suggestions)

    def test_improvement_suggestions_repeated(self):
        """Test suggestions for repeated characters"""
        suggestions = improvement_suggestions("aaa111")
        self.assertIn("Avoid repeating the same character multiple times", suggestions)

    def test_improvement_suggestions_strong_password(self):
        """Test that strong passwords have no suggestions"""
        strong = "K9#mP2@xL7qW4$"
        suggestions = improvement_suggestions(strong)
        self.assertEqual(len(suggestions), 0, f"Strong password should have no suggestions, got {suggestions}")


class TestPasswordEntropy(unittest.TestCase):
    """Test password_entropy function"""
    
    def test_password_entropy_empty(self):
        """Test entropy of empty password"""
        entropy = password_entropy("")
        self.assertEqual(entropy, 0.0, f"Empty password should have 0 entropy, got {entropy}")

    def test_password_entropy_sequential_penalty(self):
        """Test that sequential patterns reduce entropy"""
        sequential = "abc123"
        entropy_seq = password_entropy(sequential)
        
        # Similar length random password
        random = "K9mP2x"
        entropy_rand = password_entropy(random)
        
        self.assertGreater(entropy_rand, entropy_seq, "Random password should have higher entropy")

    def test_password_entropy_short_penalty(self):
        """Test that short passwords have lower entropy"""
        short = "Pass1!"
        long_pass = "Pass1!Pass1!Pass1!"
        
        entropy_short = password_entropy(short)
        entropy_long = password_entropy(long_pass)
        
        self.assertGreater(entropy_long, entropy_short, "Longer password should have higher entropy")

    def test_password_entropy_character_pool(self):
        """Test that more character types increase entropy"""
        lowercase_only = "password"
        mixed = "Password1!"
        
        entropy_lower = password_entropy(lowercase_only)
        entropy_mixed = password_entropy(mixed)
        
        self.assertGreater(entropy_mixed, entropy_lower, "Mixed character types should increase entropy")

    def test_password_entropy_positive(self):
        """Test that entropy is always positive for non-empty passwords"""
        test_passwords = ["a", "abc", "Password1!", "K9#mP2@xL7"]
        for pwd in test_passwords:
            entropy = password_entropy(pwd)
            self.assertGreaterEqual(entropy, 0, f"Entropy should be >= 0 for '{pwd}', got {entropy}")


class TestHasSequentialChars(unittest.TestCase):
    """Test has_sequential_chars function"""
    
    def test_has_sequential_chars_increasing(self):
        """Test detection of increasing sequences"""
        self.assertTrue(has_sequential_chars("abc"))
        self.assertTrue(has_sequential_chars("123"))
        self.assertTrue(has_sequential_chars("xyz"))
        self.assertTrue(has_sequential_chars("password123"))

    def test_has_sequential_chars_decreasing(self):
        """Test detection of decreasing sequences"""
        self.assertTrue(has_sequential_chars("cba"))
        self.assertTrue(has_sequential_chars("321"))
        self.assertTrue(has_sequential_chars("zyx"))

    def test_has_sequential_chars_no_sequence(self):
        """Test that non-sequential strings return False"""
        self.assertFalse(has_sequential_chars("password"))
        self.assertFalse(has_sequential_chars("K9#mP2"))
        self.assertFalse(has_sequential_chars("a1b2c3"))

    def test_has_sequential_chars_short(self):
        """Test that very short strings return False"""
        self.assertFalse(has_sequential_chars("ab"))
        self.assertFalse(has_sequential_chars("a"))
        self.assertFalse(has_sequential_chars(""))

    def test_has_sequential_chars_case_insensitive(self):
        """Test that sequence detection is case-insensitive"""
        self.assertTrue(has_sequential_chars("ABC"))
        self.assertTrue(has_sequential_chars("AbC"))


class TestAnalysePassword(unittest.TestCase):
    """Test analyse_password function"""
    
    def test_analyse_password_length(self):
        """Test length detection"""
        short = analyse_password("short")
        long_pass = analyse_password("thisisalongpassword")
        
        self.assertFalse(short["length"])
        self.assertTrue(long_pass["length"])

    def test_analyse_password_character_types(self):
        """Test character type detection"""
        features = analyse_password("Password1!")
        
        self.assertTrue(features["lowercase"])
        self.assertTrue(features["uppercase"])
        self.assertTrue(features["digit"])
        self.assertTrue(features["symbol"])

    def test_analyse_password_missing_types(self):
        """Test detection of missing character types"""
        features = analyse_password("password")
        
        self.assertTrue(features["lowercase"])
        self.assertFalse(features["uppercase"])
        self.assertFalse(features["digit"])
        self.assertFalse(features["symbol"])

    def test_analyse_password_repeated(self):
        """Test detection of repeated characters"""
        with_repeat = analyse_password("aaa111")
        without_repeat = analyse_password("password")
        
        self.assertTrue(with_repeat["repeated"])
        self.assertFalse(without_repeat["repeated"])

    def test_analyse_password_sequential(self):
        """Test detection of sequential patterns"""
        with_seq = analyse_password("abc123")
        without_seq = analyse_password("K9#mP2")
        
        self.assertTrue(with_seq["sequential"])
        self.assertFalse(without_seq["sequential"])

    def test_analyse_password_entropy(self):
        """Test that entropy is calculated"""
        features = analyse_password("Password1!")
        self.assertIn("entropy", features)
        self.assertIsInstance(features["entropy"], float)
        self.assertGreaterEqual(features["entropy"], 0)


if __name__ == "__main__":
    unittest.main()
