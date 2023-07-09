'use strict';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import Strings from './controllers/strings.controller';
import App from './config/server';

const port = process.env.PORT;

const app = new App([new Strings()], port);

app.listen();
