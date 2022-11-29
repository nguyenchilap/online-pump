import historyRepo from '../repos/history.repo.js';

class HistoryService {

    async get(query, page, limit) {
        return await historyRepo.find(query, page, limit);
    }

    async getById(id) {
        return await historyRepo.findOne({_id: id});
    }

    async create(history) {
        return await historyRepo.create(history);
    }

}

const historyService = new HistoryService();

export default historyService;