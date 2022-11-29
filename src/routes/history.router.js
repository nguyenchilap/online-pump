import StatusCodes from 'http-status-codes';
import { Router } from 'express';
import historyService from '../services/history.service.js';
import responseFormat from '../shared/responseFormat.js';

const router = Router();


//define route

/**
 * create history
 * 
 * POST
 * /api/histories
 * 
 */
 router.post('', async (req, res) => {

    const history = req.body;

    try {
        const result = await historyService.create(history);

        if (!result) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(responseFormat(false, {}, {}));

        return res.status(StatusCodes.OK).json(responseFormat(true, {} , {
            history: result
        }));

    } catch(e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(responseFormat(false, { message: e }, {})).end()
    }
});



/**
 * Get histories
 * 
 * GET
 * /api/histories?page=&limit=
 * 
 */
 router.get('/', async (req, res) => {

    const query = {};

    const page = req.query.page;
    const limit = req.query.limit;
    if (req.query.from_date && req.query.to_date)  {
        query.createdAt = {
            $gte: req.query.from_date,
            $lte: req.query.to_date
        }
    }

    try {
        const histories = await historyService.get(query, page, limit);
        if (histories.length <= 0) 
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(responseFormat(false, {}, {})).end();

        return res.status(StatusCodes.OK).json(responseFormat(true, {} , {
            histories: histories.docs,
            pagination: {
                ...histories,
                docs: null
            }
        }));

    } catch(e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(responseFormat(false, { message: e }, {})).end()
    }
});


export default router;