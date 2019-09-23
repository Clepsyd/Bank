class Transaction {
  constructor(mode, amount, balanceAfter) {
    this._enforceArgs(arguments, 3);
    this.mode = mode;
    this.amount = amount;
    this.balanceAfter = balanceAfter;
  }

  _enforceArgs(args, expectedArgsNumber) {
    if (args.length != expectedArgsNumber) {
      throw new Error("An argument missing, can not create transaction.");
    }
  }
}

module.exports = Transaction;