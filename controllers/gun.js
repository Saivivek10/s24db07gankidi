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
// exports.gun_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: gun detail: ' + req.params.id);
// };

exports.gun_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await gun.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };


// Handle gun create on POST.
// Handle gun create on POST.
exports.gun_create_post = async function(req, res) {
    console.log(req.body)
    let document = new gun();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gun_type":"goat", "Manufacturer":12, "Caliber":"large"}
    document.gun_type = req.body.gun_type;
    document.Manufacturer = req.body.Manufacturer;
    document.Caliber = req.body.Caliber;
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
// exports.gun_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: gun update PUT' + req.params.id);
// };


exports.gun_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await gun.findById( req.params.id)
    // Do updates of properties
    if(req.body.gun_type)
    toUpdate.gun_type = req.body.gun_type;
    if(req.body.Manufacturer) toUpdate.Manufacturer = req.body.Manufacturer;
    if(req.body.Caliber) toUpdate.Caliber = req.body.Caliber;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };

    // Handle gun delete on DELETE.
exports.gun_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await gun.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.gun_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await gun.findById( req.query.id)
    res.render('gundetail',
    { title: 'gun Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


    
// Handle building the view for creating a gun.
// No body, no in path parameter, no query.
// Does not need to be async
exports.gun_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('guncreate', { title: 'gun Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for updating a gun.
// query provides the id
exports.gun_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await gun.findById(req.query.id)
    res.render('gunupdate', { title: 'gun Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
// Handle a delete one view with id from query
exports.gun_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await gun.findById(req.query.id)
    res.render('gundelete', { title: 'gun Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };



