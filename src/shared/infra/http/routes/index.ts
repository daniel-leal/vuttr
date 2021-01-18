import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';

import toolsRouter from '@modules/tools/infra/http/routes/tools.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/tools', toolsRouter);

routes.get('/', (req, res) => {
  res.json({
    name: 'vuttr',
    description: 'Very Useful Tools to Remember',
    version: 1.0,
    status: 'ok',
  });
});

export default routes;
