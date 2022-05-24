# TransactionExercise API Documentation Using Postman

Start the server using 'node .' in the terminal

## Base Path
1. If the user sends a request to the base path a message stating "Please search by transaction properties" will be returned.

## Retrieve a single transaction by ID
1. Using postman select a Get request 
2. Enter 'localhost:8080/transaction/id' in the get request URL field with id as the id of your transaction
3. The requested transaction data will be returned if found or else a message stating 'Transaction not found' will be returned

## Find/Search for Transactions (any property is searchable)
### Multiple query parameters are possible
1. I was not able to complete this section. I am a bit rusty using express and wasted alot of time trying to remember how to use query parameter(s).

## Retrieve all transactions by Account Number
1. Using postman select a Get request 
2. Enter 'localhost:8080/transaction/?AccountNumber=accountNum' in the get request URL field with accountNum as the AccountNumber of your transaction(s)
3. The requested transaction(s) data will be returned if found or else a message stating 'Transaction not found' will be returned

## Retrieve all transactions by DateRange based on DateFields
1. Using postman select a Get request 
2. Enter '[localhost:8080/transaction/id](http://localhost:8080/transaction/?dateFrom=fromDate&dateTo=toDate)' in the get request URL field with fromDate as the floor of your search and toDate as the ceiling.
3. The requested transaction data will be returned if found or else a message stating 'Transaction not found' will be returned
