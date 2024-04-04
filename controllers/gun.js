var gun = require('../models/gun');

exports.gun_list = async function(req, res) {
    try{
    thegun = await gun.find();
    res.send(thegun);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// VIEWS
// Handle a show all view
exports.gun_view_all_Page = async function(req, res) {
    try{
    thegun = await gun.find();
    res.render('gun', { title: 'gun Search Results', results: thegun });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };   
// for a specific gun.
exports.gun_detail = function(req, res) {
res.send('NOT IMPLEMENTED: gun detail: ' + req.params.id);
};
// Handle gun create on POST.
// Handle Costume create on POST.
exports.gun_create_post = async function(req, res) {
    console.log(req.body)
    let document = new gun();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.cookies_name = req.body.cookies_name;
    document.cost = req.body.cost;
    document.cookies_for = req.body.cookies_for;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle gun delete from on DELETE.
exports.gun_delete = function(req, res) {
res.send('NOT IMPLEMENTED: gun delete DELETE ' + req.params.id);
};
// Handle gun update form on PUT.
exports.gun_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: gun update PUT' + req.params.id);
};
