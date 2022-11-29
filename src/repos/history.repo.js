import History from '../models/history.model.js'

class HistoryRepo {

    async create(history) {
        return await History.create(history);
    }

    async findOne(query) {
        const history = await History.findOne(query).lean();
        return history;
    }

    async find(query, page, limit) {
        return await History.paginate(query, {
            page,
            limit,
            lean: true,
            sort: '-createdAt'
        });
    }

    async updateOne(query, newHistory) {
        return await History.updateOne(query, newHistory);
    }

    async deleteOne(query) {
        return await History.deleteOne(query);
    }

    async deleteMany(ids) {
        return await History.deleteMany({
            _id: {
                $in: ids
            }
        })
    }
}

const historyRepo = new HistoryRepo();

export default historyRepo;