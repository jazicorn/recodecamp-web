'use strict';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import App from './server';
import Index from './controllers/index.controller';
import Guest_Routes from './controllers/guest/guest.controller';
import Comments from './controllers/comments/comments.controller';
import VarGeneral from './controllers/variables/var.controller';
import VarDeclare from './controllers/variables/var.declare.controller';
import VarScope from './controllers/variables/var.scope.controller';
import VarScopeReassign from './controllers/variables/var.scope.reassign.controller';

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
