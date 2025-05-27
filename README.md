# 🔐 Password Strength Analyzer  
**By Kaniz Sukayna**

A beautiful and secure web-based tool to analyze the strength of passwords in real time. It uses a Python Flask backend (running on Kali Linux) and a visually engaging frontend (running in a browser on Windows). Includes sound effects, celebration popups, and smart feedback for creating strong passwords.

---

## 🌟 Features

- ✅ Real-time password strength feedback  
- 👁️ Toggle password visibility  
- 🎉 Celebration popup for strong passwords  
- 🔊 Sound effects for strong passwords  
- 📱 Responsive and clean UI  
- 🔄 Keyboard support (Enter key triggers analysis)  
- 🔐 Backend logic to evaluate password composition

---

## 📂 Project Structure


---

## 🚀 How to Run

### 🔧 Backend (Kali Linux)

1. Install Flask:
   ```bash
   sudo apt install python3-flask
2. Install Flask CORS
    ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install flask flask-cors
3. Run
   ```
    cd backend
    python3 app.py
   
🌐 Frontend (Windows or any browser)
Open frontend/index.html in your browser

Make sure your browser can access your Kali IP on port 5000

```Example:
 http://192.168.x.x:5000/analyze
```
🧪 Password Evaluation Criteria :

✅ Length
✅ Uppercase / Lowercase
✅ Digits
✅ Symbols

Scores and suggestions will be shown accordingly.

🤝 Contributions
Feel free to fork this project and enhance it! Suggestions and pull requests are always welcome.

📜 License
This project is open-source and free to use.
Built with ❤ by Kaniz Sukayna


### ✅ What to do next:

1. Save that as `README.md` inside your project root.
2. Add it to Git and push it:

```bash
git add README.md
git commit -m "Added professional README"
git push
