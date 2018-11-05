const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/maintenance"
);

const userSeed = [
	{
		firstName: "Mark",
		lastName: "Albright",
		email: "malbright@accuratebox.com",
		password: "RORY1020gordie",
		companyArray : [
			{
				"name" : "Accurate Box Co",
				"address" : "86 5th Ave",
				"city" : "Paterson",
				"state" : "NJ",
				"zip" : "07524",
				"type" : "packaging",
				"website" : "http://www.accuratebox.com/"
			}],
		machineryArray : [
			{
				"name" : "Sheeter 1",
				"manufacturer" : "Maxson",
				"installed-year" : "2014",
				"serialNumber" : "SN123456",
				"workOrders" : []
			},
			{
				"name" : "Press 4",
				"manufacturer" : "KBA",
				"installed-year" : "1998",
				"serialNumber" : "KBA0123",
				"workOrders" : []
			}
		],
		createdAt: new Date(Date.now())
	}
];

db.User
	.remove({})
	.then(() => db.User.collection.insertMany(userSeed))
	.then(data => {
		console.log(data.insertedIds.length + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});