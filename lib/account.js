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

  statement() {
    console.log("date || credit || debit || balance");

    for(let transaction of this.transactions.reverse()) {
      let line = [];
      line.push(this._dateToString(transaction.processedAt))
      if (transaction.mode == "credit") {
        line.push(transaction.amount.toFixed(2));
        line.push(" ");
        line.push(transaction.balanceAfter.toFixed(2));

        console.log(
          line.join(" || ")
        );
      }
      else if (transaction.mode == "debit") {
        line.push(" ");
        line.push(transaction.amount.toFixed(2));
        line.push(transaction.balanceAfter.toFixed(2));

        console.log(
          line.join(" || ")
        );
      }
    }
  }

  _preventOverdraft(amount) {
    if(amount > this.balance) {
      throw new Error("Funds insufficient!");
    }
  }

  _saveTransaction(mode, amount, balance) {
    this.transactions.push(new this.TransactionClass(mode, amount, balance));
  }

  _dateToString(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return day + "/" + month + "/" + year
  }
}

module.exports = Account;