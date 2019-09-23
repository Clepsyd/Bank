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
    
});