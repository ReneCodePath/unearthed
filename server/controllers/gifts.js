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

export default {getGifts, getGiftById}