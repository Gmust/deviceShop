const { Device, BasketDevice, Basket, Brand} = require("../models/models")

class BasketController {

    async addToBasket(req,res,next){
        const user = req.user
        const {deviceId} = req.body
        const basket = await BasketDevice.create({basketId : user.id, deviceId : deviceId})
        return res.json(basket)
    }

    async getBasketUser(req,res){
        const {id} = req.user
        const basket = await BasketDevice.findAll({include: {
                model: Device
            }, where: {basketId: id}})

        return res.json(basket)
    }

    async deleteBasketItem(req,res){
        console.log(req.query)
        const id = req.query.itemId
        console.log(id)
        const deletedItem = await  BasketDevice.destroy({ where: {  id } });
        return res.json(deletedItem);

    }

}


module.exports = new BasketController()