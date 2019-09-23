class Account {
  constructor(transactionClass) {
    this.balance = 0;
    this.transactions = [];
    this.TransactionClass = transactionClass;
  }

  deposit(amount) {
    this.balance += amount;
    this._saveTransaction("credit", amount);
  }

  withdraw(amount) {
    this._preventOverdraft(amount);
    this.balance -= amount;
    this._saveTransaction("debit", amount);
  }

  _preventOverdraft(amount) {
    if(amount > this.balance) {
      throw new Error("Funds insufficient!");
    }
  }

  _saveTransaction(mode, amount) {
    this.transactions.push(new this.TransactionClass(mode, amount));
  }
}

module.exports = Account;