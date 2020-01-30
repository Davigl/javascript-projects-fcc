/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first
argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third
argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if
it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted
in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/

const VALUES = {
  "ONE HUNDRED": 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01
};

const fixChange = number => {
  return parseFloat(number).toFixed(2);
};

const convertArrayToObject = (array, values) => {
  values.forEach(data => {
    array[data[0]] = data[1];
  });
};

const evaluateOwning = values => {
  let sum = values.reduce((sum, obj) => {
    return sum + obj[1];
  }, 0);

  return fixChange(sum);
};

const checkChanges = (output, change, owning) => {
  if (change > 0) {
    output["status"] = "INSUFFICIENT_FUNDS";
    output["change"] = [];
  } else if (owning) {
    output["status"] = "CLOSED";
    output["change"] = output["change"].reverse();
  } else {
    output["status"] = "OPEN";
  }
};

function checkCashRegister(price, cash, cid) {
  var cidObj = {};
  var change = parseFloat(cash - price).toFixed(2);
  var owning = evaluateOwning(cid) === change;
  var output = {
    status: "",
    change: []
  };

  convertArrayToObject(cidObj, cid);

  Object.keys(VALUES).forEach(key => {
    var value = VALUES[key];
    var valueCid = cidObj[key];

    change = fixChange(change);

    if (change >= value) {
      let needed = Math.floor(change / value);
      let ownedMoney = Math.floor(valueCid / value);

      if (ownedMoney >= needed) {
        change -= needed * value;
        output.change.push([key, needed * value]);
      } else {
        change -= ownedMoney * value;
        output.change.push([key, ownedMoney * value]);
      }
    } else if (owning) {
      output.change.push([key, 0]);
    }
  });

  checkChanges(output, change, owning);

  return output;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ])
);
