const app = require("express")(); //import express
const data = require("../transactions.json"); //import data

const PORT = 8080; //declare port to run server

app.listen(PORT, () => {
  console.log("its alive");
}); //listen on express server on port 8080

app.get("/", (req, res) => {
  res.status(200).send("Please search by transaction properties");
}); //base path does not return any data

app.get("/transaction", (req, res) => {
  let querySize = Object.keys(req.query).length;
  if (req.query.AccountNumber && querySize == 1) {
    //if account number is searched
    const result = data.filter(
      (item) => item.AccountNumber == req.query.AccountNumber
    );
    res.status(200).send(result);
  } else if (req.query.dateFrom && req.query.dateTo && querySize == 2) {
    //if data range is searched
    const result = data.filter(
      (item) =>
        item.PostDate <= req.query.dateTo && item.PostDate >= req.query.dateFrom
    );
    res.status(200).send(result);
  } else if (querySize >= 1) {
    //this section was going to be used for Endpoint #2: searching for any property but I ran out of time
    const result = data.filter((item) => item[req.query]);
    console.log(req.query);
    res.status(200).send(result);
  } else res.status(404).send("Transaction not found"); //default message if transaction was not found

  //search all transactions-testing purposes
  //else res.status(200).send(data);
});

app.get("/transaction/:id", (req, res) => {
  //search for a transaction by id
  let transactionData;
  data.find((item) => {
    if (item.Id == req.params.id) {
      transactionData = item;
    }
  });

  if (transactionData) res.status(200).send(transactionData);
  else res.status(404).send("Transaction not found");
});
