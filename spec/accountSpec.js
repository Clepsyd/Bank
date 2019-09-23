describe('Account', () => {
  
  const Account = require("../lib/account");
  let account;

  beforeEach( () => {
    account = new Account();
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
  });

  describe('#transactions', () => {
    it('returns and array of transactions', () => {
      let transaction1 = "transaction1";
      let transaction2 = "transaction2";
      account.transactions.push(transaction1, transaction2);

      expect(account.transactions).toEqual(["transaction1", "transaction2"])
    });
  });
});