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

export default {getGifts}