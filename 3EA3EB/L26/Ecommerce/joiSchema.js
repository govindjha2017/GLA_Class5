const joi = require("joi");

const productSchema = joi.object({
    name :joi.string().required(),
    image : joi.string().required(),
    price: joi.number().required().min(0),
    desc: joi.string().required()
})

module.exports = productSchema;