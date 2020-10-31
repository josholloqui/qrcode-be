import QrCodes from '../models/qrcode';
import { RequestHandler } from 'express'

class QrController {
  public post: RequestHandler = async(req, res, next) => {
    const { title, url, qr_image} = req.body;

    QrCodes.create({
      title, 
      url,
      qr_image
    })
      .then((qrcode) => res.send(qrcode))
      .catch(next)
  }
}

export default QrController;
