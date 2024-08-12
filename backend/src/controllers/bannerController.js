const pool = require('../config/db');

exports.banner = async(req,res) => {
    const query = `SELECT * FROM banner`;
    try{
        const [result] = await pool.query(query);
        res.send(result);
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Failed to get banner details' });
    }
};

exports.post_banner = async(req,res) => {
    const { banner_text, banner_link, banner_datetime, visibility } = req.body;
    const query = `
        INSERT INTO banner (banner_text, banner_link, banner_time)
        VALUES (?, ?, ?)
      `;

    try{
      const [result] = await pool.query(query,[banner_text, banner_link, banner_datetime, visibility]);
      res.status(201).json({ message: 'Banner created successfully!' });
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Failed to post banner details' });
    }
}