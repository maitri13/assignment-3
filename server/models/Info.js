var mongoose = require('mongoose');

// Create the InfoSchema.
var InfoSchema = new mongoose.Schema({
    Age: {
        type:String,
        required: true
    },
    ID: {
        type:String,
        required: true
    }
});

//Export the model schema.
module.exports = InfoSchema;
