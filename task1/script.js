let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

const timeData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: []
};

let requiredCost = prompt("Введите обязательную статью расходов в этом месяце");
let requiredPay = prompt("Во сколько обойдется?");

timeData.expenses.requiredCost = requiredPay;

console.log(timeData);
alert("бюджет на 1 день " +money/30);