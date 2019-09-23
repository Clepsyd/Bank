describe('Account', () => {
  
  const Account = require("../lib/account");
  let account;

  class mockTransaction {
    constructor(mode, amount, balanceAfter) {
      this.mode = mode;
      this.amount = amount;
      this.balanceAfter = balanceAfter;
      this.processedAt = new Date();
    }
  }

  beforeEach( () => {
    account = new Account(mockTransaction);
  });

  describe('#balance', () => {
    it('returns 0 by default', () => {
      expect(account.balance).toEqual(0);
    });
  });

  describe('#deposit', () => {
    it('adds an amount to the balance', () => {
      account.deposit(100);

      expect(account.balance).toEqual(100);
    });

    it('adds a "credit" transaction to transactions with the correct amount and the final balance', () => {
      account.deposit(100);
      let transaction = account.transactions[0];

      expect(transaction.amount).toEqual(100);
      expect(transaction.mode).toEqual("credit");
      expect(transaction.balanceAfter).toEqual(100);
    });
  });
  
  describe('#withdraw', () => {
    it('subtracts an amount from the balance', () => {
      account.deposit(100);
      account.withdraw(50);

      expect(account.balance).toEqual(50);
    });

    it('raises an error if trying to withdraw more than current balance', () => {
      account.deposit(100);

      expect(() => { account.withdraw(101) }).toThrowError("Funds insufficient!");
    });

    it('adds a "debit" transaction to transactions with the correct amount and the final balance', () => {
      account.deposit(100);
      account.withdraw(25);
      let transaction = account.transactions.slice(-1)[0];

      expect(transaction.amount).toEqual(25);
      expect(transaction.mode).toEqual("debit");
      expect(transaction.balanceAfter).toEqual(75);
    });
  });

  describe('#transactions', () => {
    it('returns and array of transactions', () => {
      let transaction1 = "transaction1";
      let transaction2 = "transaction2";
      account.transactions.push(transaction1, transaction2);

      expect(account.transactions).toEqual(["transaction1", "transaction2"])
    });
  });

  describe('#statement', () => {
    it('outputs a statement with all transactions to stdout', () => {
      let dateMock = new Date('December 17, 1995 03:24:00');
      jasmine.clock().mockDate(dateMock);
      account.deposit(100);
      account.withdraw(25);
      spyOn(console, 'log');
      account.statement();

      // expect(console.log).toHaveBeenCalledWith(
      //   "date || credit || debit || balance",
      //   "17/12/1995 ||   || 25.00 || 75.00",
      //   "17/12/1995 || 100 ||   || 100.00"
      // );
      expect(console.log.calls.argsFor(0).pop()).toEqual("date || credit || debit || balance");
      expect(console.log.calls.argsFor(1).pop()).toEqual("17/12/1995 ||   || 25.00 || 75.00");
      expect(console.log.calls.argsFor(2).pop()).toEqual("17/12/1995 || 100.00 ||   || 100.00");
    });
  });
});