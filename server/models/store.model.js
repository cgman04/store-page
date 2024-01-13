const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: [true, "Store name is required"],
        minlength: [3, "Store name must be at least 3 characters long"]
    },
    storeNumber: {
        type: Number,
        required: [true, "Store number is required"],
        minlength: [3, "Store number must be at least 3 characters long"]
    },
    openStatus: {
        type: String,
        required: [true, "Open status is required"],
        minlength: [3, "Open status must be at least 3 characters long"]
    },
}, { timestamps: true });

module.exports = mongoose.model("Store", StoreSchema);