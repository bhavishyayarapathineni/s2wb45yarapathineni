var organicfruits = require('../models/organicfruits');

// List of all organicfruits
exports.organicfruits_list = async function(req, res) {
    try{
    theorganicfruits = await organicfruits.find();
    res.send(theorganicfruits);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

//exports.organicfruits_list = function(req, res) {
 //res.send('NOT IMPLEMENTED: organicfruits list');
//};
// for a specific organicfruits.
exports.organicfruits_detail = async function(req, res) {
 //res.send('NOT IMPLEMENTED: organicfruits detail: ' + req.params.id);
 console.log("detail" + req.params.id)
 try {
 result = await organicfruits.findById( req.params.id)
 res.send(result)
 } catch (error) {
 res.status(500)
 res.send(`{"error": document for id ${req.params.id} not found`);
 }
};
// Handle organicfruits create on POST.
exports.organicfruits_create_post = async function(req, res) {
    console.log(req.body)
    let document = new organicfruits();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.quantity = req.body.quantity;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle organicfruits delete form on DELETE.
//exports.organicfruits_delete = function(req, res) {
 //res.send('NOT IMPLEMENTED: organicfruits delete DELETE ' + req.params.id);
//};
// Handle Costume delete on DELETE. 
exports.organicfruits_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await organicfruits.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle organicfruits update form on PUT.
exports.organicfruits_update_put = async function(req, res) {
    //res.send('NOT IMPLEMENTED: organicfruits update PUT' + req.params.id);
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await organicfruits.findById( req.params.id)
 // Do updates of properties
 if(req.body.name)
 toUpdate.name = req.body.name;
 if(req.body.quantity) toUpdate.quantity = req.body.quantity;
 if(req.body.price) toUpdate.price = req.body.price;
 let result = await toUpdate.save();
 console.log("Success " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};


// VIEWS
// Handle a show all view
exports.organicfruits_view_all_Page = async function(req, res) {
    try{
    theorganicfruits = await organicfruits.find();
    res.render('organicfruits', { title: 'organicfruits Search Results', results: theorganicfruits });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.organicfruits_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await organicfruits.findById( req.query.id)
    res.render('organicfruitsdetail',
   { title: 'organicfruits Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   exports.organicfruits_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('organicfruitscreate', { title: 'organicfruits Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   exports.organicfruits_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await organicfruits.findById(req.query.id)
    res.render('organicfruitsdelete', { title: 'organicfruits Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    exports.organicfruits_update_Page = async function(req, res) {
        console.log("update view for item "+req.query.id)
        try{
        let result = await organicfruits.findById(req.query.id)
        res.render('organicfruitsupdate', { title: 'organicfruits Update', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
       };