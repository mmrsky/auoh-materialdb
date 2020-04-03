// CREATE

// READ

const api_post_material = (req, res, next) => {
    let data = req.body;
    console.log(data);    
    res.send(JSON.stringify(data));
};

const api_get_materials = (req, res, next) => {
    res.send(JSON.stringify([]));
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