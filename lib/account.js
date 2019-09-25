/*global Transaction, Statement*/

class Account {

  constructor(transactionClass=Transaction, statementClass=Statement) {
    this._balance = 0;
    this._transactions = [];
    this.TransactionClass = transactionClass;
    this.StatementClass = statementClass;
  }

  deposit(amount) {
    this._balance += amount;
    return this._saveTransaction("credit", amount, this._balance);
  }

  withdraw(amount) {
    this._preventOverdraft(amount);
    this._balance -= amount;
    return this._saveTransaction("debit", amount, this._balance);
  }

  statement() {
    let statement = new this.StatementClass(this._transactions);
    statement.show();
  }

  _preventOverdraft(amount) {
    if(amount > this._balance) {
      throw new Error("Funds insufficient!");
    }
  }

  _saveTransaction(type, amount, balance) {
    let transaction = new this.TransactionClass(type, amount, balance);
    this._transactions.push(transaction);
    return transaction;
  }
}

if (typeof Window == "undefined") {
  global.Transaction = require("./transaction");
  global.Statement = require("./statement");
  module.exports = Account;
}

