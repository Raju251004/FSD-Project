// Handle login form submission
function handleLogin(event) {
    event.preventDefault();  // Prevent page refresh on form submit

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic login validation (Add further logic as needed)
    if (email && password) {
        alert(`Login successful for ${email}`);
        // You can add your redirection logic here if needed, e.g.
        // window.location.href = "dashboard.html";
    } else {
        alert('Please fill in both fields');
    }
}
