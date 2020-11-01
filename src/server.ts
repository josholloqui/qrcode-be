import express from 'express';
import bodyParser from 'body-parser';
import qrcodeRouter from './routers/qrcodes';
import db from './utils/database';
import cors from 'cors';
import config from './utils/config';

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routerConfig();
    this.dbConnect();
  }

  private config() {
    this.app.set('port', config.app.PORT);
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: '1mb' }));
  }

  private dbConnect() {
    db.authenticate()
      .then(() => console.log('postgres connected'))
      .catch(err => console.log('Error: ' + err));
  }

  private routerConfig() {
    this.app.use('/qrcodes', qrcodeRouter);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public start() {
    this.config();
    this.app.use(cors({
      origin: true,
      credentials: true
    }));
    this.app.listen(this.app.get('port'), () => {
      console.log('Server is listening on port ' + this.app.get('port'));
    });
    this.routerConfig();
    this.dbConnect();
}
}

const server = new Server();
server.start();
module.exports = server.app;
