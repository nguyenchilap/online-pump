import { Router } from 'express';

import historyRouter from './history.router.js';
import siteRouter from './site.router.js';

const baseRouter = Router();

baseRouter.use('/histories', historyRouter);
baseRouter.use('/', siteRouter);

export default baseRouter;