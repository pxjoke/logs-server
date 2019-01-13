module.exports = function (app) {
    const controller = require('../controllers/logs.controller');
    const usersController = require('../controllers/users.controller');

    app.route('/logs')
        .get(usersController.checkUser, controller.listAll);

    app.route('/add-log')
        .post(usersController.checkUser, controller.addLog)

    app.route('/logs/:id/delete')
        .get(usersController.checkUser, controller.delete);
};