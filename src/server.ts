import express from 'express';
import bodyParser from 'body-parser';
import db from './utils/database';

class Server {
  private app;

  constructor() {
    this.app = express();
    this.config();
    this.routerConfig();
    this.dbConnect();
  }

  private config() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: '1mb' }));
  }

  private dbConnect() {
    db.authenticate()
      .then(() => console.log('postgres connected'))
      .catch(err => console.log('Error: ' + err));
  }

  private routerConfig() {

  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public start = (port: number) => {
    return new Promise((resolve, reject) => {
      this.app.listen(port, () => {
        resolve(port);
      }).on('error', (err: any) => reject(err));
    });
  }
}

export default Server;
