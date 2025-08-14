document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const savedUser = JSON.parse(localStorage.getItem("userData"));

    if (!savedUser) {
        alert("No account found! Please register first.");
        return;
    }

    if (savedUser.username === username && savedUser.password === password) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password!");
    }
});
