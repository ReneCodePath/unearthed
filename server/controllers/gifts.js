import  pool from "../config/database.js";

const getGifts = async (req, res) => {
    const selectGiftsQuery = `
        SELECT * FROM gifts;
    `;

    try {
        const results = await pool.query(selectGiftsQuery);
        res.status(200).json(results.rows);
        console.log("🎉 items retrieved");
    } catch (err) {
        res.status(409).json({error: err.message})
        console.error("⚠️ error retreiving gifts items", err);
    }
}

const getGiftById = async (req, res) => {

    const selectQuery = `
        SELECT name,
            pricePoint,
            audience,
            image,
            description,
            submittedBy,
            submittedOn
        FROM gifts
        WHERE id=$1

    `    
    const giftId = req.params.giftId
    try {
        const results = await pool.query(selectQuery, [giftId])
        const item = results.rows[0]
        res.status(200).json(item)
        console.log(`🎉 retrieved ${item}`);
    } catch (error) {
       res.status(409).json( { error: error.message} ) 
    }
}


const createGift = async (req, res) => {
   try {
    const { name, pricepoint, audience, image, description, submittedby, submittedon } = req.body
    const results = await pool.query(
      ` INSERT INTO gifts (name, pricepoint, audience, image, description, submittedby, submittedon)
        VALUES($1, $2, $3, $4, $5, $6, $7)
        RETURNING *`,
        [name, pricepoint, audience, image, description, submittedby, submittedon]
    );
    res.status(201).json(results.rows[0])
   } catch (err) {
    res.status(409).json( { error: err.message } )
   } 
}

const updateGift = async (req, res) => {

    try {
        const id = parseInt(req.params.id)
        const { name, pricepoint, audience, image, description, submittedby, submittedon } = req.body

        const results = await pool.query(`
            UPDATE gifts SET name = $1, pricepoint = $2, audience = $3, image = $4, description = $5, submittedby = $6, submittedon= $7 WHERE id = $8`,
            [name, pricepoint, audience, image, description, submittedby, submittedon, id]
        )

        res.status(200).json(results.rows[0])

    } catch (err) {
        res.status(409).json( { error: err.message } ) 
    }
} 

const deleteGift = async (req, res) => {

    try {
       const id = parseInt(req.params.id) 
       const results = await pool.query('DELETE FROM gifts WHERE id = $1', [id])
       res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
  
} 

export default {
    getGifts, 
    getGiftById, 
    createGift,
    updateGift,
    deleteGift
}