// 1
const bankAccount = {
    ownerName: "Mark",
    accountNumber: 1967,
    balance: 1456,

    deposit() {
        const depositPrompt = prompt("Чи хочете закинути гроші на ваш рахунок? (так/ні)");

        if (depositPrompt && depositPrompt.toLowerCase() === "так") {
            const howMuchPrompt = parseFloat(prompt("Скільки хочете закинути грошей на рахунок?"));

            if (!isNaN(howMuchPrompt) && howMuchPrompt > 0) {
                this.balance += howMuchPrompt;
                alert(`Ваш рахунок поповнено. Новий баланс: ${this.balance} грн.`);
                return this.balance;
            } else {
                alert("Будь ласка, введіть коректну суму.");
            }
        } else {
            alert("Операція скасована.");
        }
    },



    withdraw() {
        const withdrawPrompt = prompt("Чи хочете зняти гроші з вашого рахунку? (так/ні)");

        if (withdrawPrompt && withdrawPrompt.toLowerCase() === "так") {
            const howMuchPrompt = parseFloat(prompt("Скільки хочете зняти грошей з рахунку?"));

            if (!isNaN(howMuchPrompt) && howMuchPrompt > 0) {
                if (howMuchPrompt <= this.balance) {
                    this.balance -= howMuchPrompt;
                    alert(`Ви зняли ${howMuchPrompt} грн. Залишок: ${this.balance} грн.`);
                    return this.balance;
                } else {
                    alert("Недостатньо коштів на рахунку.");
                }
            } else {
                alert("Будь ласка, введіть коректну суму.");
            }
        } else {
            alert("Операція скасована.");
        }
    },
};

console.log("Поточний баланс:", bankAccount.balance);

bankAccount.deposit();
console.log("Баланс після поповнення:", bankAccount.balance);

bankAccount.withdraw();
console.log("Баланс після зняття:", bankAccount.balance);
// 1

// 2
const weather = {
    temperature: 0,
    humidity: 0,
    windSpeed: 0,

    isBelowZero() {
        return this.temperature < 0;
    }
};

const temperatureInput = document.createElement("input");
temperatureInput.type = "number";
temperatureInput.id = "temperatureInput";
temperatureInput.placeholder = "Введіть температуру (°C)";
document.body.appendChild(temperatureInput);

const checkTemperatureButton = document.createElement("button");
checkTemperatureButton.id = "checkTemperatureButton";
checkTemperatureButton.textContent = "Перевірити температуру";
document.body.appendChild(checkTemperatureButton);

const resultMessage = document.createElement("p");
resultMessage.id = "resultMessage";
document.body.appendChild(resultMessage);

checkTemperatureButton.addEventListener("click", () => {
    const inputValue = parseFloat(temperatureInput.value);

    if (isNaN(inputValue)) {
        resultMessage.textContent = "Будь ласка, введіть коректну температуру.";
        return;
    }

    weather.temperature = inputValue;

    if (weather.isBelowZero()) {
        resultMessage.textContent = "Температура нижче 0 градусів Цельсія.";
    } else {
        resultMessage.textContent = "Температура вище або дорівнює 0 градусів Цельсія.";
    }
});

// 2

// 3
const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "securePassword123",

    login(inputEmail, inputPassword) {
        if (this.email === inputEmail && this.password === inputPassword) {
            return "Login successful!";
        } else {
            return "Invalid email or password.";
        }
    }
};

const result = user.login("john.doe@example.com", "securePassword123");
console.log(result);

// 3

// 4
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,

    isHighRated() {
        return this.rating > 8;
    },
};

const body = document.body;

const titleElement = document.createElement("p");
titleElement.textContent = `Title: ${movie.title}`;
if (movie.isHighRated()) {
    titleElement.style.color = "green";
}
body.appendChild(titleElement);

const directorElement = document.createElement("p");
directorElement.textContent = `Director: ${movie.director}`;
body.appendChild(directorElement);

const yearElement = document.createElement("p");
yearElement.textContent = `Year: ${movie.year}`;
body.appendChild(yearElement);

const ratingElement = document.createElement("p");
ratingElement.textContent = `Rating: ${movie.rating}`;
body.appendChild(ratingElement);

// 4