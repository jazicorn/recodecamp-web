'use strict';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import App from './server';
import Index from './controllers/index.controller';
import guestRoutes from './controllers/auth/guest/guest.controller';
import jsComments from './controllers/data/javascript/comments.controller';
import javaComments from './controllers/data/java/comments.controller';
import pythonComments from './controllers/data/python/comments.controller';
//import VarGeneral from './controllers/data/javascript/variables/var.controller';
import VarDeclare from './controllers/data/javascript/variables/var.declare.controller';
import VarScope from './controllers/data/javascript/variables/var.scope.controller';
import VarScopeReassign from './controllers/data/javascript/variables/var.scope.reassign.controller';

const app = new App(
    [],
    [
        new Index(),
        new guestRoutes(),
        new jsComments(),
        new javaComments(),
        new pythonComments(),
        //new VarGeneral(),
        new VarDeclare(),
        new VarScope(),
        new VarScopeReassign()
    ]
);

app.listen();

export default app;
