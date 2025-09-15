// Area of a Circle Functions
function areaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}
// Example usage:
console.log("Area of circle with radius 5:", areaOfCircle(5));


// random password generator 
function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

document.getElementById("passwordBtn").addEventListener("click", () => {
    const password = generatePassword(10); // 10-character password
    document.getElementById("passwordOutput").textContent = "Generated Password: " + password;
});