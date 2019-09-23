class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
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