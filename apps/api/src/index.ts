'use strict';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import Strings from './controllers/strings.controller';
import App from './config/server';

const app = new App([new Strings()], 8000);

app.listen();
