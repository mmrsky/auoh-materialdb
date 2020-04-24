const material_model = require('./material_model');




// helpers

const material_data = (req)=>{
    let data = {
        name: req.body.name,
        min_density: req.body.min_density,
        max_density: req.body.max_density,
        min_strength: req.body.min_strength,
        max_strength: req.body.max_strength,
        min_strength_density: req.body.min_strength / req.body.max_density,
        max_strength_density: req.body.max_strength / req.body.min_density
    };
    return data;
};

// CREATE
// READ

const api_post_material = (req, res, next) => {

    let data = material_data(req);
    let new_material = material_model(data);

    new_material.save().then(()=> {
        console.log(new_material);
        res.send(JSON.stringify(new_material));
    }).catch((err)=> {
        res.status(500);
        res.send(err.errmsg)
        console.log(err);
    });

    console.log(data);    

    //res.send(JSON.stringify(data));

};

const api_get_materials = (req, res, next) => {
    material_model.find({})
    .lean()
    .then(materials => {
        res.send(JSON.stringify(materials));
    }).catch(err => {
        res.status(500);
        res.send(err.errmsg)
        console.log(err);        
    });
};



// DELETE /api/material/5e87700f830fcb1b7965eaaa
const api_delete_material = (req, res, next) => {
    let id = req.params.id;
    material_model.findByIdAndRemove(id).then(()=>{
        res.send();
    }).catch(err => {
        res.status(500);
        res.send(err.errmsg)
        console.log(err);
    });
};

// UPDATE - PUT /api/material 
const api_put_material = (req, res, next) => {
    let id = req.params.id;
    let data = material_data(req);
    material_model.findByIdAndUpdate(id, data).then((material)=>{
        res.send(material);
    }).catch(err => {
        res.status(500);
        res.send(err.errmsg)
        console.log(err);
    });
};


// EXPORTS
module.exports.api_get_materials = api_get_materials;
module.exports.api_post_material = api_post_material;
module.exports.api_delete_material = api_delete_material;
module.exports.api_put_material = api_put_material;
// {
// 	name : "Steel",
// 	min_density: 1,
// 	max_density: 2,
// 	min_strength: 3,
// 	max_strength: 4
// }