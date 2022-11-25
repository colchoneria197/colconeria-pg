const { Pool } = require("pg");
const {
    PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE
} = process.env;

const pool = new Pool({
    host: PGHOST,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    port: PGPORT
});


const getProducts = async (req, res) => {
    const response = await pool.query('SELECT * FROM colchones');
    res.status(200).json(response.rows);
};

const getProductsById = async (req , res) => {
    const id = req.params.id;
    const response = await pool.query ('SELECT * FROM colchones WHERE id = $1', [id])
    res.json(response.rows)
};

const createProducts = async (req, res) => {
    console.log(req.body);
    const {name, price, description, image, stock, peso, largo, alto, ancho} = req.body
    const response = await pool.query('INSERT INTO colchones (name, price, description, image, stock, peso, largo, alto, ancho) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [name, price, description, image, stock, peso, largo, alto, ancho]);
    console.log(response)
    res.send('producto creado')
};

const updateProduct = async (req , res) => {
    const id = req.params.id;
    const {name, price, description, image, stock, peso, largo, alto, ancho} = req.body
    const response = await pool.query('UPDATE colchones SET name=$1, price=$2, description=$3, image=$4, stock=$5, peso=$6, largo=$7, alto=$8, ancho=$9 WHERE id = $10', [
        name,
        price, 
        description, 
        image, 
        stock, 
        peso, 
        largo, 
        alto, 
        ancho,
        id
    ]);
    console.log(response);
    res.json('producto modificado con éxito')
}

const deleteProducts = async (req , res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM colchones WHERE id = $1', [id]);
    console.log(response);
    res.json(`Product ${id} Borrado con éxito`);
    // res.send('product delete');
};

module.exports = {
    getProducts,
    createProducts,
    getProductsById,
    deleteProducts,
    updateProduct
}