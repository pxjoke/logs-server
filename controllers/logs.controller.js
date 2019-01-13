const mongoose = require('mongoose');
const User = mongoose.model('User');
const Log = mongoose.model('Log');

exports.listAll = function (req, res) {
    const user = req.user;

    Log.find({_user: user._id}, (err, logs) => {
        if (err) {
            res.redirect('/error');
            return;
        }

        console.log(logs);

        res.render('logs', {title: 'Logs', logs})
    });
};

exports.addLog = function (req, res) {
    const user = req.user;

    User.findOne({_id: user._id}, (err, user) => {

        const params = {
            text: req.body.text,
            date: Date.now(),
            _user: user._id
        };

        console.log('Helllo')
        console.log(params);

        const log = new Log(params);

        log.save((err, log) => {
            console.log(err);
            console.log(log);
            res.redirect('/logs');
        });

    });
};

// exports.create = function (req, res) {
//     const user = req.user;

//     User.findOne({_id: user._id}, (err, user) => {

//         const walletParams = {
//             name: req.body.name,
//             balance: req.body.balance,
//             _user: user._id
//         };

//         console.log(walletParams);

//         const wallet = new Wallet(walletParams);

//         wallet.save((err, wallet) => {
//             console.log(err);
//             console.log(wallet);
//             res.redirect('/wallets');
//         });

//     });
// };

// exports.delete = function (req, res) {
//     const user = req.user;

//     Wallet.deleteOne({name: req.params.walletName}, (err) => {
//         res.redirect('/wallets')
//     })
// };

// exports.walletPage = function (req, res) {
//     const user = req.user;

//     Wallet.findOne({name: req.params.walletName}, function (err, wallet) {
//         if (!wallet) {
//             res.redirect('/404');
//             return;
//         }

//         if (!wallet._user.equals(user._id)) {
//             res.redirect('/wallets');
//             return;
//         }

//         Transaction.find({wallet: wallet._id}, (err, transactions) => {
//             res.render('wallet', {
//                 title: 'Transactions',
//                 wallet,
//                 transactions: transactions.sort((a, b) => b.date - a.date)
//             })
//         });

//     });
// };

