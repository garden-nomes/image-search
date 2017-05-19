module.exports = (req, res) => {
	res.send({ term: req.params.term });
};
