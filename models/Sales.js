const {Schema, model} = require('mongoose');

const saleSchema = new Schema({
	client: String, 
	product: [String],
	amount: [Number],
	priceDolar: [Number],
	priceBs: [Number],
	priceTotalDolar: [Number],
	priceTotalBs: [Number],
	priceTotalAllDolar: [Number],
	priceTotalAllBs: [Number]
},
 {
 	timestamps: true
})


module.exports = model('sales', saleSchema);