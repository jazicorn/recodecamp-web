'use strict';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import App from './config/server';
import Index from './controllers/index.controller';
import VarGeneral from './controllers/variables/var.controller';
import VarDeclare from './controllers/variables/var.declare.controller';
import VarScope from './controllers/variables/var.scope.controller';
import Strings from './controllers/strings.controller';

const app = new App([
    new Index(),
    new VarGeneral(),
    new VarDeclare(),
    new VarScope(),
    new Strings()
]);

app.listen();
