describe('Account', () => {
  
  const Account = require("../lib/account");
  let account;
  let mockTransaction;

  class mockTransactionClass {
    constructor(type, amount, balanceAfter) {
      this.type = type;
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

  describe('#deposit', () => {
    it('adds an amount to the balance', () => {
      mockTransaction = new mockTransactionClass("credit", 100, 100);

      expect(account.deposit(100)).toEqual(mockTransaction);
    });
  });
  
  describe('#withdraw', () => {
    it('subtracts an amount from the balance', () => {
      account.deposit(30);
      mockTransaction = new mockTransactionClass('debit', 10, 20);

      expect(account.withdraw(10)).toEqual(mockTransaction);
    });

    it('raises an error if trying to withdraw more than current balance', () => {
      account.deposit(100);

      expect(() => { account.withdraw(101) }).toThrowError("Funds insufficient!");
    });
  });

  describe('#statement', () => {
    it('shows a statement', () => {
      spyOn(account.StatementClass.prototype, 'show');
      account.statement();

      expect(account.StatementClass.prototype.show).toHaveBeenCalledWith();
    });
  });
});