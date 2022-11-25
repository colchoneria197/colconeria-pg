const { Router, json } = require('express');
const router = Router();
const {getProducts, createProducts, getProductsById, deleteProducts, updateProduct} = require('../Controllers/controllers')

router.use(json())

router.get('/products', getProducts);
router.get('/products/:id', getProductsById);
router.post('/products', createProducts);
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProducts);


// router.post('/products', async (req, res) => {
//     try {
        
//         let {name, price, description, stock, peso, largo, alto, ancho} = req.body
//         let newproducts = await colchones.create({
//             name,
//             price,
//             description,
//             stock,
//             peso,
//             largo, 
//             alto, 
//             ancho
//         });
//         console.log(newproducts)
//     }
//     catch (error) {
//         console.log(error)
//         res.status(400).send(error)
//     }
// });
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
