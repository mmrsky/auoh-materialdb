const material_model = require('./material_model');

// CREATE
// READ

const api_post_material = (req, res, next) => {
    let data = {
        name: req.body.name,
        min_density: req.body.min_density,
        max_density: req.body.max_density,
        min_strength: req.body.min_strength,
        max_strength: req.body.max_strength,
        min_strength_density: req.body.min_strength / req.body.max_density,
        max_strength_density: req.body.max_strength / req.body.min_density
    }

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

// UPDATE
// EXPORTS
module.exports.api_get_materials = api_get_materials;
module.exports.api_post_material = api_post_material;


// {
// 	name : "Steel",
// 	min_density: 1,
// 	max_density: 2,
// 	min_strength: 3,
// 	max_strength: 4
// }