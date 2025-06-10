function togglePassword() {
  const pwField = document.getElementById("password");
  const icon = document.querySelector(".toggle-password");
  if (pwField.type === "password") {
    pwField.type = "text";
    icon.textContent = "🙈";
  } else {
    pwField.type = "password";
    icon.textContent = "👁️";
  }
}

function closeModal() {
  document.getElementById("popupModal").style.display = "none";
}

async function checkPassword() {
  const pw = document.getElementById("password").value;

  const response = await fetch("http://192.168.x.x:5000/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: pw }),
  });

  if (!response.ok) {
    document.getElementById("result").textContent = "⚠️ Error checking password.";
    document.getElementById("result").className = "strength";
    document.getElementById("suggestions").innerHTML = "";
    return;
  }

  const data = await response.json();

  const result = document.getElementById("result");
  result.textContent = `Strength: ${data.strength}`;
  result.className = `strength ${data.strength.toLowerCase()}`;

  const list = document.getElementById("suggestions");
  list.innerHTML = "";
  data.suggestions.forEach((s) => {
    const li = document.createElement("li");
    li.textContent = s;
    list.appendChild(li);
  });

  if (data.strength.toLowerCase() === "strong") {
    document.getElementById("popupModal").style.display = "flex";
    document.getElementById("celebrationSound").play();
  }
}

document.getElementById("password").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkPassword();
  }
});
