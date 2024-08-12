const pool = require('../config/db.js');

exports.test = async(req,res) => {
    const query = `SELECT * FROM test`
    try{
        const [result] = await pool.query(query);
        res.send(result);
    }catch(err){
        console.error(err);
    }
};