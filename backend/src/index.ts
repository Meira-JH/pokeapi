import dotenv from 'dotenv';
import express from 'express';
import { AddressInfo } from 'net';
import routes from './routes';
import { CONSOLE_COLOR } from './models/console';
import cors from 'cors';
import requestErrorMiddleware from './middlewares/requestErrorMiddleware';
import notFoundRouteMiddleware from './middlewares/notFoundRoute';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/', routes);

const server = app.listen(process.env.PORT || 4000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(
      CONSOLE_COLOR.GREEN,
      `Server is running http://localhost:${address.port}`
    );
  } else {
    console.error(CONSOLE_COLOR.RED, `Failure upon server initialization.`);
  }
});

app.use(notFoundRouteMiddleware);
app.use(requestErrorMiddleware);
