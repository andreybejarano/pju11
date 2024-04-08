const db = require('../../database/models');

const controller = {
    async create(req, res) {
        try {
            const { name, rating, active } = req.body;
            await db.Genre.create({ name, rating, active })
            res.status(201).send({ status: 201, message: 'Genre created' });
        } catch (error) {
            res.send(error)
        }
    },
    async list(req, res) {
        try {
            const genres = await db.Genre.findAll();
            const response = {
                meta: {
                    status: 200,
                    total: genres.length,
                    url: 'api/genre'
                },
                data: genres
            }
            res.send(response);
        } catch (error) {
            res.send(error)
        }
    },
    async detail(req, res) {
        try {
            const genre = await db.Genre.findByPk(req.params.id);
            if (!genre) {
                return res.status(404).send({ message: 'Not Found' });
            }
            res.send(genre);
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = controller;