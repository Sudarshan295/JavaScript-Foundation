/*
17. Build a banking application
A banking application needs to manage customer accounts and transactions. The user detail is stored in an
object with a keys name and balance. Write functions using object methods to update a customer's account
balance based on a deposit or withdrawal.
*/

const customer = {
    name: "Sudarshan",
    balance: 25000,
  };
  
  const deposit = function (amount) {
    this.balance += amount;
    console.log(
      `Deposit of ₹ $${amount} successful. New balance: ₹ $${this.balance}`
    );
  };
  
  const withdraw = function (amount) {
    if (this.balance < amount) {
      console.log("Insufficient balance. Withdrawal failed.");
    } else {
      this.balance -= amount;
      console.log(
        `Withdrawal of ₹ ${amount} successful. New balance: ₹ ${this.balance}`
      );
    }
  };
  
  withdraw.call(customer, 5000);
  deposit.call(customer, 10000);
  withdraw.call(customer, 40000);
