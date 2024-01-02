
exports.contactPage =  (req,res) => {
    res.render('contactUs', {
        pageTitle: 'Contact Us',
        path: '/contactus',
        formsCSS: true,
        productCSS: true
      });
};

exports.successPage =  (req,res) => {
    res.render('success', {
        pageTitle: 'Success Page',
        path: '/success',
        formsCSS: true,
        productCSS: true
      });
};