// 1
const bankAccount = {
    ownerName: "",
    accountNumber: "",
    balance: 0,

    deposit() {
        if (confirm("Чи хочете ви поповнити рахунок?")) {
            const amount = parseFloat(prompt("Введіть суму для поповнення:"));
            if (!isNaN(amount) && amount > 0) {
                this.balance += amount;
                console.log(`Рахунок поповнено на ${amount} грн. Поточний баланс: ${this.balance} грн.`);
            } else {
                console.log("Неправильна сума для поповнення.");
            }
        } else {
            console.log("Операція поповнення скасована.");
        }
    },

    withdraw() {
        if (confirm("Чи хочете ви зняти кошти з рахунку?")) {
            const amount = parseFloat(prompt("Введіть суму для зняття:"));
            if (!isNaN(amount) && amount > 0) {
                if (amount > this.balance) {
                    console.log("Недостатньо коштів на рахунку.");
                } else {
                    this.balance -= amount;
                    console.log(`Знято ${amount} грн. Поточний баланс: ${this.balance} грн.`);
                }
            } else {
                console.log("Неправильна сума для зняття.");
            }
        } else {
            console.log("Операція зняття скасована.");
        }
    },
};

bankAccount.deposit();
bankAccount.withdraw();

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

weather.temperature = parseFloat(prompt("Введіть температуру в градусах Цельсія:"));
if (isNaN(weather.temperature)) {
    console.log("Введено некоректне значення температури.");
} else if (weather.isBelowZero()) {
    console.log("Температура нижче 0 градусів Цельсія");
} else {
    console.log("Температура вище або рівна 0 градусів Цельсія");
}

    // 2

    // 3
    const user = {
        name: "",
        email: "",
        password: "",
    
        login() {
            const inputEmail = prompt("Введіть ваш email:");
            const inputPassword = prompt("Введіть ваш пароль:");
    
            if (this.email === inputEmail && this.password === inputPassword) {
                console.log("Успішний вхід!");
            } else {
                console.log("Невірний email або пароль.");
            }
        }
    };
    
    user.email = "test@gmail.com";
    user.password = "123456";
    user.login();
    // 3

    // 4
  const movie = {
    title: "",
    director: "",
    year: 0,
    rating: 0,
  
    isHighRated() {
      return this.rating > 8;
    }
  };
  
  movie.title = "Inception";
  movie.director = "Christopher Nolan";
  movie.year = 2010;
  movie.rating = 8.8;
  
  console.log(`Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Rating: ${movie.rating}`);
  if (movie.isHighRated()) {
    console.log("Фільм має високий рейтинг!");
  } else {
    console.log("Рейтинг фільму низький або середній.");
  }
    // 4