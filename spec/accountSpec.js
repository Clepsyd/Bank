describe('Account', () => {
  
  const Account = require("../lib/account");
  let account;

  class mockTransactionClass {
    constructor(mode, amount, balanceAfter) {
      this.mode = mode;
      this.amount = amount;
      this.balanceAfter = balanceAfter;
    }
  }

  class mockStatementClass {
    show(){
    }
  }

  beforeEach( () => {
    account = new Account(mockTransactionClass, mockStatementClass);
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
    it('shows a statement', () => {
      spyOn(account.StatementClass.prototype, 'show');
      account.statement();
      expect(account.StatementClass.prototype.show).toHaveBeenCalled();
    });
  });
});