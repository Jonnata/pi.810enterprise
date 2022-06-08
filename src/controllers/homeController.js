const homeController = {
    renderHome: (req, res) => {
        res.render('home', { title: '810 enterPrise' });
        }
    }

    module.exports = homeController;