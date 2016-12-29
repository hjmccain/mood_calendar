require('babel-polyfill');
const express = require('express');
const bodyParser = require('body-parser');

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

const app = express();

const knex = require('knex')({
	client: 'pg',
	connection: {
		database: 'moodcal'
	}
})

app.use(express.static(process.env.CLIENT_PATH));
app.use(bodyParser.json());

// USERS

// ENTRIES

app.get('/db-entries', (req, res) => {
	knex('entries').then((entries) => {
		return res.status(200).json({entries});
	});
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
		.then(
			res.status(204).json({})
		).catch(e => {
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
