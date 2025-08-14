document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.querySelector('input[placeholder="Enter user name"]').value.trim();
    const email = document.querySelector('input[placeholder="Enter email"]').value.trim();
    const phone = document.querySelector('input[placeholder="Enter phone number"]').value.trim();
    const password = document.querySelector('input[placeholder="Enter password"]').value.trim();
    const otp = document.querySelector('input[placeholder="Enter otp"]').value.trim();

    if (!username || !email || !phone || !password || !otp) {
        alert("Please fill all fields!");
        return;
    }

    // Save user in localStorage
    const user = { username, email, phone, password };
    localStorage.setItem("userData", JSON.stringify(user));

    alert("Registration successful! Please log in.");
    window.location.href = "authentication.html";
});
