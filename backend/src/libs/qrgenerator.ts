import qrcode from "qrcode";
export class QRGenerator {
  constructor() {}

  async generateQR(url: string) {
    return await qrcode.toDataURL(url);
  }
}
