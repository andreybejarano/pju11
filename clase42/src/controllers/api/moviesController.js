const db = require('../../database/models');

const controller = {
    async create(req, res) {
        try {
            const { title, rating, awards, release_date, length, genre_id } = req.body;
            await db.Movie.create({ title, rating, awards, release_date, length, genre_id })
            res.status(201).send({ status: 201, message: 'Movie created' });
        } catch (error) {
            res.send(error)
        }
    },
    async list(req, res) {
        try {
            const movies = await db.Movie.findAll({ include: ['genre'] });
            const response = {
                meta: {
                    status: 200,
                    total: movies.length,
                    url: 'api/movie'
                },
                data: movies
            }
            res.send(response);
        } catch (error) {
            res.send(error)
        }
    },
    async delete(req, res) {
        try {
            const movieDeleted = await db.Movie.destroy({ where: { id: req.params.id } });
            if (!movieDeleted) {
                return res.status(404).send({ message: 'Not Found' });
            }
            res.send({ message: 'Record deleted' });
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = controller;