|    Objects    |      Methods         |                 Behaviours                         |
|---------------|----------------------|----------------------------------------------------|
|*Account*      |_balance               |=> integer                                          |
|               |_transactions          |=> Array of transactions                            |
|               |deposit(amount :int)  |=> changes balance by +amount,                      |
|               |                      |=> pushes a "credit" transaction to transactions    |
|               |withdraw(amount :int) |=> changes balance by -amount,                      |
|               |                      |=> pushes a "debit" transaction to transactions     |
|               |                      |=> raises an error if balance - amount < 0          |
|               |statement()           |=> calls show on an instance of this.StatementClass |
|*Transaction*  |processedAt           |=> Date object, reflects moment transaction was made|
|               |mode                  |=> "credit" or "debit"                              |
|               |amount                |=> integer                                          |
|               |balanceAfter          |=> integer                                          |
|*Statement*    |show()                |=> output a statement of all transactions to stdout |
|               |_transactions          |=> transactions for which the statement is created  |

_* output for Statement#show should be like so:_
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```