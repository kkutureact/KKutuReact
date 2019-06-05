import express from 'express';
import log4js from 'log4js';
import cookieParser from 'cookie-parser';
import WebSocket from 'ws';
import http from 'http';

import { Game } from './Game/index';

export const app = express();
export const logger = log4js.getLogger();
const port = 8081;

log4js.configure(__dirname + '/config/log4js.json');

const httpServer = http.createServer(app);
export const ws = new WebSocket.Server({ server: httpServer });

logger.level = 'ALL';

app.use(express.json());
app.use(cookieParser());

Game();

httpServer.listen(port, () => logger.info(`Game server listening on ${port}`));
