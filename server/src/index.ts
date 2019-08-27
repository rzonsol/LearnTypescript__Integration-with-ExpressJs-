import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookeSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookeSession({ keys: ['test'] }));
app.use(router);

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
