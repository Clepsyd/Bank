class Transaction {
  constructor(type, amount, balanceAfter) {
    this._enforceArgs(arguments, 3);
    this.type = type;
    this.amount = amount;
    this.balanceAfter = balanceAfter;
    this.processedAt = new Date();
  }

  _enforceArgs(args, expectedArgsNumber) {
    if (args.length != expectedArgsNumber) {
      throw new Error("An argument missing, can not create transaction.");
    }
  }
}

if (typeof Window == "undefined") {
  module.exports = Transaction;
}