"use strict";
var $ = function(id) {return document.getElementById(id);};

var Validate = function() {
    this.month = 0;
    this.year = 0;
};
Validate.prototype.isDate = function(text) {
    if ( ! /^[01]\d\/\d{4}$/.test(text) ) return false;
    var dateParts = text.split("/");
    this.month = parseInt(dateParts[0]);
    this.year = parseInt(dateParts[1]);
    if ( this.month < 1 || this.month > 12 ) return false;
    return true;
};
class Transaction {
    constructor(date, description, category, amount) {
    this.date = date;
    this.description = description;
    this.category = category;
    this.amount = amount;
}

} 
const transactions = [
    new Transaction('02-13-21', 'groceries', 'debit', '200'),
    new Transaction('02-13-21', 'car', 'debit', '500'),
    new Transaction('02-13-21', 'bills', 'debit', '1000'),
    new Transaction('02-13-21', 'insurance', 'debit', '600'),
    new Transaction('02-13-21', 'health', 'debit', '90'),

    new Transaction('03-19-21', 'gas', 'credit', '50'),
    new Transaction('03-19-21', 'decorations', 'credit', '20'),
    new Transaction('03-19-21', 'shopping', 'credit', '40'),
    new Transaction('03-19-21', 'appliences', 'credit', '50'),
    new Transaction('03-19-21', 'entertainment', 'credit', '10')

]

function getTransaction(){
console.log(transactions)
 return transactions;
}
var table = $("tbl");
var tBody = table.tBodies[0];
if (tBody == undifined){
    tBody = document.createElement("tbody");
    table.appendChild(tBody);
}
var row = tBody.insertRow(-5);

var textNode = document.createTextNode(transactions);

total.credit = "gas"+"decorations" + "shopping"+ "appliences" + "entertainment";
total.debit = "groceries" + "car" + "bills" + "insurance" + "health";

const credit = ["gas", "decorations", "shopping", "appliences", "entertainment"];
const debit = ["groceries", "car", "bills", "insurance", "health"];
amount = " ";

console.log(total.credit);
console.log(total.debit);
console.log(total.credit+total.debit);
console.log(total.credit+total.debit-amount);


window.onload = function(){
    $("transactions").onclick = transactions;
}

