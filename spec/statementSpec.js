describe('Statement', () => {
  
  const Statement = require("../lib/statement");
  let statement;

  beforeEach( () => {
    let dateMock = new Date('December 17, 1995 03:24:00');
    let mockTransaction1 = jasmine.createSpyObj(
      "transaction1",
      {},
      {
        'mode': "credit",
        'amount': 100,
        'balanceAfter': 100,
        'processedAt': dateMock
      }
    );
    let mockTransaction2 = jasmine.createSpyObj(
      "transaction2",
      {},
      {
        'mode': "debit",
        'amount': 25,
        'balanceAfter': 75,
        'processedAt': dateMock
      }
    );
    let transactions = [mockTransaction1, mockTransaction2];
    statement = new Statement(transactions); 
  });

  describe('#show', () => {
    it('outputs a statement for an account to stdout', () => {
      spyOn(console, 'log');
      statement.show();

      expect(console.log.calls.argsFor(0).pop()).toEqual("date || credit || debit || balance");
      expect(console.log.calls.argsFor(1).pop()).toEqual("17/12/1995 ||   || 25.00 || 75.00");
      expect(console.log.calls.argsFor(2).pop()).toEqual("17/12/1995 || 100.00 ||   || 100.00");
    });
  });

});