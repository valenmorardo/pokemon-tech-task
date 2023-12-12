const errorHandler = (error, _req, res, _next) => {
	const status = error.response ? error.response.status : error.status;

	return res.status(status || 500).send({
		error_message: error.message,
		error_status: status
	});
};

export default errorHandler;
