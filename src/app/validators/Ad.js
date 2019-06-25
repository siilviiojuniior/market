const Joi = require('joi')

module.exports = {
  body: {
    title: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    price: Joi.number().required(),
  }
}
