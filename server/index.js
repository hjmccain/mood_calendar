require('babel-polyfill');
const express = require('express');
const bodyParser = require('body-parser');

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

const app = express();

// For local db connection
// const knex = require('knex')({
// 	client: 'pg',
// 	connection: {
// 		database: 'moodcal'
// 	}
// });

const knex = require('knex')({
  client: 'pg',
	connection: 'postgres://slqzfesh:G-iHM_lrX3WF_2Adny2rlbDeHbL4jnS5@babar.elephantsql.com:5432/slqzfesh'
});

app.use(express.static(process.env.CLIENT_PATH));
app.use(bodyParser.json());

// USERS

// ENTRIES

app.get('/db-entries', (req, res) => {
	knex('entries').then((entries) => {
		return res.status(200).json({entries});
	});
});

// TODO: remove hardcoding & add error handling
app.post('/db-entries', (req, res) => {
	knex.insert({
		text: req.body.text,
		date: req.body.date,
		mood: req.body.mood,
		user_id: req.body.user_id
	}).into('entries').then(() => {
		return res.status(201).json({})
	}).catch(e => {
		console.error(e);
		res.sendStatus(500);
	})
});

// TODO: remove hardcoding & add error handling
app.put('/db-entries', (req, res) => {
	knex('entries').where({id: req.body.id})
	.update({
		text: req.body.text,
		mood: req.body.mood
	}).into('entries').then(() => {
		return res.status(201).json({})
	}).catch(e => {
		console.error(e);
		res.sendStatus(500);
	})
});

app.delete('/db-entries', (req, res) => {
	console.log('(index.js entries req body)', req.body.id);
	if (!req.body) {
		return res.status(400).json({
			message: 'No request body'
		});
	}
	if (req.body.id === " ") {
		return res.status(422).json({
			message: 'Missing field: ID'
		});
	}
	if (typeof req.body.id ===  isNaN) {
		return res.status(422).json({
			message: 'Incorrect field type: #'
		});
	}
	knex('entries').where({id: req.body.id}).del()
		.then(() => {
			res.sendStatus(204);
		}).catch(e => {
		console.error(e);
		res.sendStatus(500);
	});
});

// use to select single entry?
// app.delete('/db-entries', (req, res) => {
// 	console.log('(index.js entries req body)', req.body);
// 	knex.select().from('entries').where({id: req.body.id}).then((entries) => {
// 		return res.status(200).json({entries});
// 	});
// });

console.log(`Server running in ${process.env.NODE_ENV} mode`);

function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}
