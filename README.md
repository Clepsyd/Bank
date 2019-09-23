# Bank account Model (_Bank_ tech test)

## Installation

- Clone this repo:
`git clone git@github.com:Clepsyd/Bank.git`

- If Node.js isn't installed on your system, follow the instructions here: https://nodejs.org/

- If you wish to run the test suite:
    - Install the dependencies:

    `npm install`
    - Run the tests:

    `npm test`
    - Run the tests with code coverage report:

    `npm run coverage`

## Usage

For a detailed breakdown of the model, please refer to the [domain model here](DomainModel.md)

You only need 4 instance methods from the Account class:
- #deposit(_amount_) _-> undefined_

    adds an integer _amount_ to the account's balance.

- #withdraw(_amount_) _-> unedfined_

    substracts an integer _amount_ from the account's balance.

- #balance _-> int_

    returns the current balance for the account.

- #statement _-> undefined_

    outputs to stdout a summary of all transactions that occurred on the account.

Usage example:

```javascript
let account = new Account();
account.balance // => 0

account.deposit(20)
account.balance // => 20

account.withdraw(5)
account.balance // => 15

account.statement 
/*
outputs the following:

date || credit || debit || balance
10/01/2012|| || 5.00 || 15.00
10/01/2012 || 20.00 || || 20.00
*/
```
