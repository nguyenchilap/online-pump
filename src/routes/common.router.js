import { Router } from 'express';
import StatusCodes from 'http-status-codes';
import responseFormat from '../shared/responseFormat.js';


const commonRouter = Router();

//define route

/**
 * Get commons
 * 
 * GET
 * /api/commons/
 * 
 */
commonRouter.get('/', (req, res) => {

});


export default commonRouter;