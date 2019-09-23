class Account {
  constructor(transactionClass) {
    this.balance = 0;
    this.transactions = [];
    this.TransactionClass = transactionClass;
  }

  deposit(amount) {
    this.balance += amount;
    this._saveTransaction("credit", amount, this.balance);
  }

  withdraw(amount) {
    this._preventOverdraft(amount);
    this.balance -= amount;
    this._saveTransaction("debit", amount, this.balance);
  }

  _preventOverdraft(amount) {
    if(amount > this.balance) {
      throw new Error("Funds insufficient!");
    }
  }

  _saveTransaction(mode, amount, balance) {
    this.transactions.push(new this.TransactionClass(mode, amount, balance));
  }
}

module.exports = Account;