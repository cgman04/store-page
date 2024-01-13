const StoreContoller = require('../controllers/store.controller');

module.exports = app => {
    app.get('/api/stores', StoreContoller.findAllStores);
    app.get('/api/stores/:id', StoreContoller.findOneStore);
    app.post('/api/stores', StoreContoller.createStore);
    app.put('/api/stores/:id', StoreContoller.updateStore);
    app.delete('/api/stores/:id', StoreContoller.deleteStore);
}