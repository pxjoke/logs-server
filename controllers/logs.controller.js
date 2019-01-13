const mongoose = require('mongoose');
const User = mongoose.model('User');
const Log = mongoose.model('Log');
const moment = require('moment');

exports.listAll = function (req, res) {
    const user = req.user;

    Log.find({
        _user: user._id
    }, (err, logs) => {
        if (err) {
            res.redirect('/error');
            return;
        }



        res.render('logs', {
            title: 'Logs',
            logs: logs.map(log => Object.assign(log, {
                dateFormated: moment(log.date).format('YYYY-MM-DD')
            }))
        })
    });
};

exports.addLog = function (req, res) {
    const user = req.user;

    User.findOne({
        _id: user._id
    }, (err, user) => {

        const params = {
            text: req.body.text,
            date: Date.now(),
            _user: user._id
        };

        console.log(params);

        const log = new Log(params);

        log.save((err, log) => {
            console.log(err);
            console.log(log);
            res.redirect('/logs');
        });

    });
};

exports.delete = function (req, res) {
    Log.deleteOne({
        _id: req.params.id
    }, (err) => {
        res.redirect('/logs')
    })
};