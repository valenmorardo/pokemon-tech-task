import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import env from '@config/var-environments';
import express from 'express';

const server = express();

server.set('port', env.PORT || 3001);

server.use(bodyParser.json());
server.use(express.json());
server.use(cookieParser());

server.use(bodyParser.urlencoded({ extended: false }));

server.use((_req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Access-Control-Allow-Headers, Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Request-Method, Access-Control-Allow-Request-Method, Access-Control-Request-Headers,  Access-Control-Allow-Origin',
	);
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader('Access-Control-Request-Headers', '*');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, HEAD, POST, OPTIONS, PUT, DELETE',
	);
	res.setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});


export default server;
