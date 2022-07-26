const {Type} = require("../models/models");

class TypeController {


    async create(req, res) {
        const {name} = req.body;
        const type = await  Type.create({name});
        return res.json(type)
    };


    async getAll(req, res) {
        const types = await  Type.findAll();
        return res.json(types)
    };

    async delete(req, res) {
        const deletedType = await  Type.destroy({where: {id: req.params.id}});
        return res.json(deletedType);
    };


}

module.exports = new TypeController();