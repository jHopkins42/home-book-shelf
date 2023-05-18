//required imports
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    id: {
        type: Number,
        required: true,

    },
    author: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: false,

    },
    price: {
        type: Number,
        required: true,

    },
    available: {
        type: Boolean,

    },
    genre: {
        type: String,
        required: true,

    }, 
    image: {
        type: String,
        required: true,

    },
});

//exports
module.exports = mongoose.model("Book", bookSchema);
// room left to add additional information per schema category.
//potential additional items to track: quantity owned, condition, format (hardback/paperback/e-book)