let db = require('../db/conection');

const getAll = (req, res) => {
    const sql = "SELECT * FROM dashboards ORDER BY difficulty, time_spent ASC"
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).send({
                message: err,
                state: false
            });
        }
        res.status(200).send({
            dashboards: rows,
            state: true
        });
    });
}

const saveRegister = (req, res) => {
    let body = req.body;

    const sql = `INSERT INTO dashboards (player, difficulty, start_time, end_time, time_spent, status) 
            VALUES (?1, ?2, ?3, ?4, ?5, ?6)`

    db.run(sql, [body.player, body.difficulty, body.start_time, body.end_time, body.time_spent, body.status], (err) => {
        if (err) {
            res.status(400).send({
                message: err,
                state: false
            });
        }
        res.status(200).send({
            dashboards: 'saved data',
            state: true
        });
    });
}

module.exports = {
    getAll, saveRegister
}