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
  
});