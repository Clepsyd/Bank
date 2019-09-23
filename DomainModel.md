|    Objects    |      Methods         |                 Behaviours                         |
|---------------|----------------------|----------------------------------------------------|
|*Account*      |balance               |=> integer                                          |
|               |transactions          |=> Array of transactions                            |
|               |deposit(amount :int)  |=> changes balance by +amount, returns new balance  |
|               |withdraw(amount :int) |=> changes balance by -amount, returns new balance  |
|               |                      |=> raises an error if balance - amount < 0          |
|               |statement             |=> output a statement of all transactions to stdout |
|*Transaction*  |date                  |=> Date object, reflects moment transaction was made|
|               |balanceBefore         |=> integer                                          |
|               |mode                  |=> "credit" or "debit"                              |
|               |amount                |=> integer                                          |
|               |balanceAfter          |=> integer                                          |