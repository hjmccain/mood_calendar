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
// >>> TODO: remove hardcoded user_id <<<
app.get('/entries/:entry', (req, res) => {
	const entry_id = req.params.entry
	knex.where({id: entry_id}).select().from('entries').then((entries) => {
		return res.status(200).json({entries});
	});
});

app.get('/entries', (req, res) => {
	console.log('(index.js entries req body)', req.body);
	knex.select().from('entries').then((entries) => {
		return res.status(200).json({entries});
	});
});

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
