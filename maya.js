function generateRandomName() {
    const firstNames = ["John", "Jane", "Michael", "Sarah", "David", "Emily"];
    const middleNames = ["A.", "B.", "C.", "D.", "E.", "F."];
    const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Davis", "Miller"];

    document.getElementById("firstName").value = firstNames[Math.floor(Math.random() * firstNames.length)];
    document.getElementById("middleName").value = middleNames[Math.floor(Math.random() * middleNames.length)];
    document.getElementById("lastName").value = lastNames[Math.floor(Math.random() * lastNames.length)];

    validateInputs();
}

function validateInputs() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const password = document.getElementById("password").value.trim();
    const doneButton = document.getElementById("doneButton");

    doneButton.disabled = !(firstName && lastName && phoneNumber.length === 11 && phoneNumber.startsWith("09") && password);
}

function startLoadingSequence() {
    document.querySelector(".loading-circle").style.display = "block";
    document.querySelector(".loading-text").textContent = "Filling Out The Details & Requesting OTP...";
    setTimeout(() => {
        document.querySelector(".loading-circle").style.display = "none";
        document.getElementById("otpSection").style.display = "block";
        document.getElementById("otp").disabled = false;
    }, 20000);
}

function validateOTP() {
    const otp = document.getElementById("otp").value.trim();
    const otpButton = document.getElementById("otpButton");

    otpButton.disabled = otp.length !== 6; // Enable button only when OTP is exactly 6 digits
}

function startOtpLoading() {
    const otpButton = document.getElementById("otpButton");
    otpButton.disabled = true; // Prevent multiple clicks
    document.querySelector(".otp-loading-circle").style.display = "block";
    document.querySelector(".otp-loading-text").textContent = "Verifying OTP & Finalizing Account...";

    setTimeout(() => {
        document.querySelector(".otp-loading-circle").style.display = "none";
        document.querySelector(".otp-loading-text").textContent = "✅ Account Successfully Created!";
        alert("✅ Account Successfully Created!");
    }, 15000);
}