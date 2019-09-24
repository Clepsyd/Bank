class Statement {
  constructor(transactions) {
    this._transactions = transactions;
  }

  show(){
    console.log("date || credit || debit || balance");

    for(let transaction of this._transactions.reverse()) {
      let line;
      if (transaction.type == "credit") {
        line = this._creditStatementLine(transaction);
      } else {
        line = this._debitStatementLine(transaction);
      }
      console.log(line.join(" || "));
    }
  }

  _creditStatementLine(transaction) {
    let line = [];
    line.push(this._dateToString(transaction.processedAt))
    line.push(transaction.amount.toFixed(2));
    line.push(" ");
    line.push(transaction.balanceAfter.toFixed(2));
    
    return line
  }

  _debitStatementLine(transaction) {
    let line = [];
    line.push(this._dateToString(transaction.processedAt))
    line.push(" ");
    line.push(transaction.amount.toFixed(2));
    line.push(transaction.balanceAfter.toFixed(2));
    
    return line
  }

  _dateToString(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return day + "/" + month + "/" + year
  }
}

if (typeof Window == "undefined") {
  module.exports = Statement;
}