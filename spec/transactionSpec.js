describe('Transaction', () => {
  
  const Transaction = require('../lib/transaction');
  
  it('should raise an error if mode, amount, or balanceAfter is not provided', () => {

    expect(() => new Transaction("credit")).toThrowError("An argument missing, can not create transaction.");
    expect(() => new Transaction(25)).toThrowError("An argument missing, can not create transaction.");
    expect(() => new Transaction("credit", 25)).toThrowError("An argument missing, can not create transaction.");
  });
  
});