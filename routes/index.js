//home route
exports.home = (req, res)=>{
    res.render('home', {title: 'Home'});
}

//about route
exports.about = (req, res)=>{
    res.render('about', {title: 'About'});
}