const Store = require("../models/store.model");

// Find All Stores
module.exports.findAllStores = (req, res) => {
    Store.find()
        .then(allStores => res.json({ results: allStores }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Find One Store
module.exports.findOneStore = (req, res) => {
    Store.findOneById({ _id: req.params.id })
        .then(oneStore => res.json({ results: oneStore }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Create Store
module.exports.createStore = (req, res) => {
    Store.create(req.body)
        .then(newStore => res.json({ results: newStore }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Update Store
module.exports.updateStore = (req, res) => {
    Store.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedStore => res.json({ results: updatedStore }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Delete Store
module.exports.deleteStore = (req, res) => {
    Store.findByIdAndDelete(req.params.id)
        .then(deletedStore => res.json({ results: deletedStore }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}



