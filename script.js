document.getElementById("submitButton").addEventListener("click", function() {
    var email = document.getElementById("emailInput").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var errorMessage = document.getElementById("errorMessage");

    if (!emailPattern.test(email)) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        // E-posta geçerli, devam edebilirsiniz.
    }
});

