function startCountdown() {
    let otpButton = document.querySelector(".button-otp");
    let phoneNumber = document.querySelector("#phone").value;
    if (/^09\d{9}$/.test(phoneNumber)) {
        let timeLeft = 60;
        otpButton.disabled = true;
        otpButton.classList.add("disabled");
        let countdown = setInterval(() => {
            otpButton.textContent = timeLeft + " sec";
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(countdown);
                otpButton.textContent = "Get OTP";
                otpButton.disabled = false;
                otpButton.classList.remove("disabled");
            }
        }, 1000);
    } else {
        alert("Please enter a valid 11-digit number that starts with 09");
    }
}

function startLoadingSequence() {
        let loadingContainer = document.querySelector(".loading-container");
        let loadingText = document.querySelector(".loading-text");
        let messages = [
            { text: "Verifying Code...", delay: 5000 },
            { text: "Creating Name...", delay: 10000 },
            { text: "Creating Birthday...", delay: 8000 },
            { text: "Creating Place of Birth...", delay: 5000 },
            { text: "Finalizing Account... (MPIN, Others, etc.)", delay: 10000 },
            { text: "✅ Account Successfully Created!", delay: 3000 }
        ];

        let index = 0;
        loadingContainer.style.display = "flex";

function showNextMessage() {
            if (index < messages.length) {
                loadingText.textContent = messages[index].text;
                setTimeout(() => {
                    index++;
                    showNextMessage();
                }, messages[index].delay);
            } else {
                setTimeout(() => {
                    loadingContainer.style.display = "none";
                    alert("Account Successfully Created!");
                }, 2000);
            }
        }

        showNextMessage();
    }
