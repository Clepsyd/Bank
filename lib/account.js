class Account {
  constructor(transactionClass) {
    this.balance = 0;
    this.transactions = [];
    this.transactionClass = transactionClass;
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(new this.transactionClass("credit", amount));
  }

  withdraw(amount) {
    this._preventOverdraft(amount);
    this.balance -= amount;
  }

  _preventOverdraft(amount) {
    if(amount > this.balance) {
      throw new Error("Funds insufficient!");
    }
  }
}

module.exports = Account;