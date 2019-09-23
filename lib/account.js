class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if(amount > this.balance) {
      throw new Error("Funds insufficient!");
    }
    this.balance -= amount;
  }
}

module.exports = Account;