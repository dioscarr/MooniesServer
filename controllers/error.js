exports.get404 = (req, res, next) => {
    res.status(404).render('404', { PageTitle: '404er', message: 'Page Not Found1', path: '/404' });
};