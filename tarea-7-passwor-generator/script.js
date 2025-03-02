document.addEventListener("DOMContentLoaded", () => {
    // Selección de elementos del DOM
    const passwordField = document.getElementById("password");
    const copyBtn = document.getElementById("copyBtn");
    const lengthInput = document.getElementById("length");
    const lengthValue = document.getElementById("lengthValue");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");
    const generateBtn = document.getElementById("generate");
    const strengthIndicator = document.getElementById("strength");

    // Actualiza el valor de la longitud en la interfaz
    lengthInput.addEventListener("input", () => {
        lengthValue.textContent = lengthInput.value;
    });

    // Evento para generar una nueva contraseña
    generateBtn.addEventListener("click", () => {
        passwordField.value = generatePassword();
        evaluateStrength(passwordField.value);
    });

    // Copiar contraseña al portapapeles
    copyBtn.addEventListener("click", () => {
        passwordField.select();
        document.execCommand("copy");
        alert("Contraseña copiada al portapapeles");
    });

    // Función para generar la contraseña
    function generatePassword() {
        const length = parseInt(lengthInput.value);
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+{}[]<>?";
        
        let characters = "";
        // Agregar los conjuntos de caracteres seleccionados
        if (uppercaseCheckbox.checked) characters += uppercase;
        if (lowercaseCheckbox.checked) characters += lowercase;
        if (numbersCheckbox.checked) characters += numbers;
        if (symbolsCheckbox.checked) characters += symbols;
        
        // Validar que se haya seleccionado al menos un tipo de caracteres
        if (characters === "") return "Seleccione al menos un conjunto de caracteres";
        
        // Generar la contraseña aleatoria
        let password = "";
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
    }

    // Función para evaluar la seguridad de la contraseña
    function evaluateStrength(password) {
        let strength = "Débil";
        if (password.length > 10 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+{}[\]<>?]/.test(password)) {
            strength = "Fuerte";
        } else if (password.length > 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
            strength = "Media";
        }
        strengthIndicator.textContent = "Seguridad: " + strength;
    }
});
