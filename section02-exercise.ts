type BankAccount = {money: number, deposit: (value: number) => void};

let bankAccount: BankAccount = {  // void because function returns nothing
	money: 2000,
	deposit(value: number): void {  // void because function returns nothing 
			this.money += value;
	}
};

let myself: {name: string, bankAccount: BankAccount, hobbies: string[] } = {  // `bankAccount: {money: number, deposit: (value: number) => void}` is the same as above but is difficult to read and can be double work if updating. therefore create a new `type` and assign it to both variables. 
	name: "Max",
	bankAccount: bankAccount,
	hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);