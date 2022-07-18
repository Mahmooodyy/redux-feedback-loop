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

router.post('/', (req, res) => {
    console.log('In POST');
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`;
    const feedback = req.body;


    pool.query(queryText, [feedback.Feelings, feedback.Understanding, feedback.Support, feedback.Comments] )
        .then((response) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error in POST', error);
            res.sendStatus(500);
        })
})


module.exports = router;