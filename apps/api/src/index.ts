'use strict';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import App from './server';
import Index from './controllers/index.controller';
import Guest_Routes from './controllers/auth/guest/guest.controller';
import Comments from './controllers/data/comments/comments.controller';
import VarGeneral from './controllers/data/javascript/variables/var.controller';
import VarDeclare from './controllers/data/javascript/variables/var.declare.controller';
import VarScope from './controllers/data/javascript/variables/var.scope.controller';
import VarScopeReassign from './controllers/data/javascript/variables/var.scope.reassign.controller';

const app = new App(
    [],
    [
        new Index(),
        new Guest_Routes(),
        new Comments(),
        new VarGeneral(),
        new VarDeclare(),
        new VarScope(),
        new VarScopeReassign()
    ]
);

app.listen();

export default app;
