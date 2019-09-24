describe('Transaction', () => {
  
  const Transaction = require('../lib/transaction');
  let transaction;

  beforeEach( () => {
    jasmine.clock().install();
  });

  afterEach( () => {
    jasmine.clock().uninstall();
  });

  it('should raise an error if type, amount, or balanceAfter is not provided', () => {

    expect(() => new Transaction("credit")).toThrowError("An argument missing, can not create transaction.");
    expect(() => new Transaction(25)).toThrowError("An argument missing, can not create transaction.");
    expect(() => new Transaction("credit", 25)).toThrowError("An argument missing, can not create transaction.");
  });

  it('records the date and time at which it is created', () => {
    let dateMock = new Date('December 17, 1995 03:24:00');
    jasmine.clock().mockDate(dateMock);
    transaction = new Transaction("debit", 20, 80);

    expect(transaction.processedAt).toEqual(dateMock);
  });
  
});