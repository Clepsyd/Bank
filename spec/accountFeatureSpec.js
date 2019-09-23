describe('Feature - Account', () => {
  const dateToString = require("./helpers/dateHelper");
  
  const Account = require('../lib/account');
  const today = dateToString(new Date());
  
  it('allows a user to use a bank account', () => {
    const account = new Account;
    account.deposit(100);
    account.withdraw(10);
    account.withdraw(40);
    account.withdraw(15.6);
    account.deposit(50);

    expect(() => {account.withdraw(150)}).toThrowError("Funds insufficient!");

    spyOn(console, 'log');
    account.statement()
    
    expect(console.log.calls.argsFor(0)[0]).toEqual("date || credit || debit || balance");
    expect(console.log.calls.argsFor(1)[0]).toEqual(`${today} || 50.00 ||   || 84.40`);
    expect(console.log.calls.argsFor(2)[0]).toEqual(`${today} ||   || 15.60 || 34.40`);
    expect(console.log.calls.argsFor(3)[0]).toEqual(`${today} ||   || 40.00 || 50.00`);
    expect(console.log.calls.argsFor(4)[0]).toEqual(`${today} ||   || 10.00 || 90.00`);
    expect(console.log.calls.argsFor(5)[0]).toEqual(`${today} || 100.00 ||   || 100.00`);
  });
  
});