from flask import Flask, request, jsonify
from flask_cors import CORS  

app = Flask(__name__)
CORS(app)  

def analyze_password(password):
    length = len(password)
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    has_symbol = any(not c.isalnum() for c in password)

    score = sum([has_upper, has_lower, has_digit, has_symbol])

    if length < 6 or score <= 1:
        strength = "Weak"
        suggestions = ["Use more characters", "Mix uppercase, digits, symbols"]
    elif length < 10 or score == 2:
        strength = "Medium"
        suggestions = ["Add symbols or numbers", "Use more variety"]
    else:
        strength = "Strong"
        suggestions = []

    return {"strength": strength, "suggestions": suggestions}

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    password = data.get("password", "")
    result = analyze_password(password)
    return jsonify(result)

if __name__ == "__main__":
   app.run(host='0.0.0.0', port=5000, debug=True)
