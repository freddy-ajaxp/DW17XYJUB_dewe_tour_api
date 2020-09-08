const { user } = require("../models/user");
const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
	let header, token;

	if (
		!(header = req.header('Authorization')) ||
		!(token = header.replace('Bearer ', ''))
	)
		return res.status(401).send({ message: 'Unauthorized' });

	try {
        // console.log("auth.js, isi process.env.SECRET_KEY ", process.env.SECRET_KEY)
		const verified = jwt.verify(token, process.env.SECRET_KEY);

		req.user = verified;
		next();
	} catch (error) {
		res.status(400).send({ message: 'Invalid Token' });
	}
};

exports.authAdmin = async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: {
				id: req.user.id
			}
		});

		if (user.admin !== 'true')
			return res.status(400).send({ message: 'Invalid Operation' });

		next();
	} catch (error) {
		res.status(400).send({ message: 'Invalid token' });
	}
};
