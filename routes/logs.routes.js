module.exports = function (app) {
    const controller = require('../controllers/logs.controller');
    const usersController = require('../controllers/users.controller');

    app.route('/logs')
        .get(usersController.checkUser, controller.listAll);

    app.route('/add-log')
        .post(usersController.checkUser, controller.addLog)


    // app.route('/wallets/:walletName/new-transaction')
    //     .get(usersController.checkUser, transactionsController.newTransactionPage)
    //     .post(usersController.checkUser, transactionsController.create);

    // app.route('/new-wallet')
    //     .get(usersController.checkUser, walletsController.newWalletPage)
    //     .post(usersController.checkUser, walletsController.create);

    // app.route('/wallets/:walletName')
    //     .get(usersController.checkUser, walletsController.walletPage);

    // app.route('/wallets/:walletName/delete')
    //     .get(usersController.checkUser, walletsController.delete);


};