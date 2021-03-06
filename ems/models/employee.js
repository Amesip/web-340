// required

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// define the fruitSchema

var employeeSchema = new Schema({

    firstName: String,
    lastName: String

});

// define the fruit model

var Employee = mongoose.model("Employee", employeeSchema);

// expose the fruit to calling files

module.exports = {Employee: Employee};
