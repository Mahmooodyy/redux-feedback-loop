const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


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



//post new feedback to database upon submit
router.post('/', (req, res) => {
    console.log('In POST');
    const queryText = 
    `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
    VALUES ($1, $2, $3, $4);`;
    const feedback = req.body;
    console.log(feedback.feeling);

    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments] )
        .then((response) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error in POST', error);
            res.sendStatus(500);
        })
})

module.exports = router;