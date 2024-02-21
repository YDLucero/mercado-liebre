const db = require('../database/models')
const { Op } = require('sequelize')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		/* db.Product.findAll()
			.then(products =>{
				return res.render('index',{
					productsVisited: products.filter(product=>product.categoryId === 1),
					products, 
					toThousand})
			})
			.catch(error=>console.log(error)) */

		/*filtrado desde la db*/
		const productsVisited = db.Product.findAll({
			where: {
				categoryId: 1
			}
		})
		const productsInSale = db.Product.findAll({
			where: {
				categoryId: 2
			}
		})

		Promise.all([productsVisited, productsInSale])
			.then(([productsVisited, productsInSale]) => {
				return res.render('index', {
					productsVisited,
					productsInSale,
					toThousand
				})

					
			})
			.catch(error=>console.log(error))
	},
	search: (req, res) => {
		const { keywords } = req.query;

		db.Product.findAll({
			where: {
				name: {
					[Op.substring]: keywords
				}
			}
		})
			.then(products => {
				return res.render('results', {
					products,
					keywords,
					toThousand
				})
			})
			.catch(error=>console.log(error))

	},

};

module.exports = controller;
