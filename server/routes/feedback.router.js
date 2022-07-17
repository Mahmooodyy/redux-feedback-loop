const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//get feedback to display on admin page
router.get('/', (req, res) => {
    console.log('In GET');
    const queryText = `SELECT * FROM "feedback" ORDER BY "id" DESC;`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET', error);
        res.sendStatus(500);
    })
    
})



module.exports = router;