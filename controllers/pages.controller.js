exports.index = (req, res) => {
    const user = req.session.user;
    console.log(req.session.user);
    if (user) {
        res.redirect('/logs');
        return;
    }

    res.redirect('/register');
};