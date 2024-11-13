
// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. Створіть метод об'єкту для отримання та відображення цих даних.


let user = {
  name: "Roman",
  age: 35,
  location: "Amsterdam, Netherlands",
  email: "romeoR@example.com",
  position: "Front-end Developer",

  getUserInfo: function () {
    return `Ім'я: ${this.name},
    Вік: ${this.age},
    Місце проживання: ${this.location},
    Електронна пошта: ${this.email},
    Професія: ${this.position}`;
  }
};


console.log(user.getUserInfo()); 