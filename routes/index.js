var express = require('express');
var router = express.Router();
const connection = require('../utile/database');
// const app = express();

//rest api to get all tasks
router.get('/tasks', function (req, res) {
    //select all and set a different date format to examle: 4 januari 2019
    connection.query('select *,DATE_FORMAT(dateToComplete, "%d %M %Y") as dateToComplete from tasks', function (error, results, fields) {
        if (error) throw error;
        //render view index with results
        res.render('index', {
            results: results
        })
    });
});

//rest api to get a single task
router.get('/task/:id', function (req, res) {
    //select all from one task and set a different date format to examle: 4 januari 2019
    connection.query('select *,DATE_FORMAT(dateToComplete, "%Y-%m-%d") as dateToComplete from tasks where Id=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        //render view task with results
        res.render('task', {
            results: results
        })
    });
});

//rest api to create a new task record into mysql database
router.post('/task', function (req, res) {
    let params  = req.body;
    console.log(params);
    connection.query('INSERT INTO tasks SET ?', params, function (error, results, fields) {
        if (error) throw error;
        //redirect to route tasks
        res.redirect('tasks');
    });
});

//rest api to update task record into mysql database
//made it a post route and changed the route because i wanted the update in the page from a single task
router.post('/task/:id', function (req, res) {
    console.log(req.body)
    connection.query('UPDATE `tasks` SET `title`=?, `description`=?, `assignedTo`=?, `dateToComplete`=? where `Id`=?', [req.body.title,req.body.description,req.body.assignedTo,req.body.dateToComplete,req.params.id], function (error, results, fields) {
        if (error) throw error;
        //redirect to route tasks
        res.redirect('tasks');
    });
});

//rest api to delete record from mysql database
router.delete('/task', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `tasks` WHERE `Id`=?', [req.body.id], function (error, results, fields) {
        if (error) throw error;
        res.end('Record has been deleted!');
    });
});

//rest api to get all customers
router.get('/', function (req, res) {
    //redirect to route tasks
    res.redirect('tasks');
});

module.exports = router;
