const uuid = require('uuid');
const path = require('path');
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {

    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + '.jpg';
            await img.mv(path.resolve(__dirname, '..', 'static', fileName));

            if(info){
                info =JSON.parse(info);
                info.forEach(i =>
                DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id
                }))
            }

            const device = await Device.create({name, price, brandId, typeId, img: fileName});
            return res.json(device);
        } catch (e) {

        }
    };

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 6;
        let offSet = page * limit - limit


        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offSet});
        }
        if (brandId && !typeId) {
            devices = await  Device.findAndCountAll({where:{brandId}, limit, offSet})
        }
        if (!brandId && typeId) {
            devices = await  Device.findAndCountAll({where:{typeId}, limit, offSet})
        }
        if (brandId && typeId) {
            devices = await  Device.findAndCountAll({where:{typeId, brandId}, limit, offSet})
        }

        return res.json(devices);

    };

    async getOne(req, res) {
            const {id} = req.params;
            const device = await  Device.findOne({where:{id},include:[{model: DeviceInfo, as: 'info'}]});
            return res.json(device);
    };
}

module.exports = new DeviceController();