function generateRandomName() {
    const firstNames = ["Juan", "Maria", "Jose", "Ana", "Carlos", "Liza", "Mark", "Rosa", "Antonio", "Carmen", "Daniel", "Isabel", "Fernando", "Teresa", "Rafael", "Sofia", "Emmanuel", "Bea", "Ricardo", "Luisa", "Gabriel", "Patricia", "Adrian", "Angela", "Samuel", "Marian", "Victor", "Elena", "Miguel", "Celeste", "Paolo", "Clarisse", "Nathan", "Christine", "Alfonso", "Diana", "Dominic", "Eunice", "Raymond", "Joanna", "Xavier", "Katrina", "Vincent", "Regina", "Julius", "Fiona", "Edgar", "Veronica", "Benjamin", "Lorraine", "Felipe", "Samantha", "Joel", "Evelyn", "Gregorio", "Elaine", "Hector", "Melanie", "Oscar", "Bianca", "Leo", "Gabrielle", "Alfred", "Monica", "Cesar", "Rochelle", "Jaime", "Valerie", "Diego", "Rhea", "Martin", "Jean", "Francis", "Lara", "Jerome", "Stephanie", "Kevin", "Nicole", "Jason", "Camille", "Arnold", "Michelle", "Patrick", "Charlene", "Bryan", "Denise", "Edwin", "Lianne", "Christopher", "Hannah", "Ronald", "Maxine", "Erwin", "Jasmine", "Oliver", "Maricar", "Steven", "Juliana", "Felix", "Daphne"];
    const middleNames = ["Reyes", "Santos", "Cruz", "Bautista", "Gomez", "Dela Cruz", "Garcia", "Lopez", "Fernandez", "Ramos", "Hernandez", "Torres", "Mendoza", "Gonzalez", "Castro", "Villanueva", "Navarro", "Domingo", "Aguilar", "Salvador", "De Guzman", "Vargas", "Ortega", "Pascual", "Santiago", "Mercado", "Ponce", "Roxas", "Magsaysay", "Aquino", "Ferrer", "Soriano", "Ocampo", "Marquez", "Calderon", "Valencia", "Espinoza", "Estrada", "Manalo", "Lim", "Chavez", "Buenaventura", "Samson", "Velasco", "Peralta", "Galang", "Abad", "Miranda", "Padilla", "Tolentino", "Yap", "Tan", "Sy", "Go", "Ong", "Uy", "Co", "Chua", "Limjoco", "Gokongwei", "Lazaro", "Almendras", "De Leon", "Evangelista", "Carpio", "Estrella", "Tiongson", "Rosales", "Jacinto", "Verano", "Benedicto", "Nolasco", "Mapua", "Quezon", "San Juan", "David", "Pineda", "Villamor", "Gatchalian", "Espejo", "Regalado", "Calma", "Dizon", "Bartolome", "Guinto", "Banzon", "Montemayor", "Sarmiento", "Del Rosario", "Zamora", "Quintana", "Manansala", "Villareal", "Cabrera", "Fontanilla", "Alvarado", "Suarez", "Magno", "Dimaculangan", "Ilagan"];
    const lastNames = ["Dela Cruz", "Santos", "Reyes", "Cruz", "Garcia", "Mendoza", "Torres", "Gonzales", "Bautista", "Ramos", "Hernandez", "Lopez", "Fernandez", "Domingo", "Pascual", "Villanueva", "Aguilar", "Salvador", "Navarro", "Castro", "De Guzman", "Vargas", "Ortega", "Santiago", "Mercado", "Ponce", "Roxas", "Magsaysay", "Aquino", "Ferrer", "Soriano", "Ocampo", "Marquez", "Calderon", "Valencia", "Espinoza", "Estrada", "Manalo", "Lim", "Chavez", "Buenaventura", "Samson", "Velasco", "Peralta", "Galang", "Abad", "Miranda", "Padilla", "Tolentino", "Yap", "Tan", "Sy", "Go", "Ong", "Uy", "Co", "Chua", "Limjoco", "Gokongwei", "Lazaro", "Almendras", "De Leon", "Evangelista", "Carpio", "Estrella", "Tiongson", "Rosales", "Jacinto", "Verano", "Benedicto", "Nolasco", "Mapua", "Quezon", "San Juan", "David", "Pineda", "Villamor", "Gatchalian", "Espejo", "Regalado", "Calma", "Dizon", "Bartolome", "Guinto", "Banzon", "Montemayor", "Sarmiento", "Del Rosario", "Zamora", "Quintana", "Manansala", "Villareal", "Cabrera", "Fontanilla", "Alvarado", "Suarez", "Magno", "Dimaculangan", "Ilagan", "Baluyot"];

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
