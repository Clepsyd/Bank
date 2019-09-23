class Account {
  constructor(transactionClass=require("./transaction"), statementClass=require("./statement")) {
    this.balance = 0;
    this.transactions = [];
    this.TransactionClass = transactionClass;
    this.StatementClass = statementClass;
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

  statement() {
    let statement = new this.StatementClass(this.transactions);
    statement.show();
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