import { IDevice } from "../models/device";
import { IRouteController } from "../routes/index";
import { deviceService } from "../services/device";

export default class DeviceController {
  /** Buscar vaucher */
  static find: IRouteController<{}, {}, {}, {}> = async (req, res) => {
    try {
      const companyCode = res.locals.companyCode;
      let data: Array<IDevice> = await deviceService.find(
        {
          companyCode: companyCode,
        },
        {}
      );

      res.json({ ack: 0, data });
    } catch (e) {
      return res.status(400).json({ ack: 1, message: e.message });
    }
  };
  static create: IRouteController<{}, {}, {}, {}> = async (req, res) => {
    try {
      const companyCode = res.locals.companyCode;
      const device = req.body as IDevice;
      //device.companyCode = companyCode;
      const exists = await deviceService.findOne(
        { idDevice: device.idDevice, companyCode: companyCode },
        {}
      );
      if (exists) throw new Error("El dispositivo ya esta creado");
      let data = await deviceService.insertOne(device, {});
      if (!data) throw new Error("No se pudo crear el dispositivo");
      res.json({ ack: 0, message: "Dispositivo creado correctamente" });
    } catch (e) {
      return res.status(400).json({ ack: 1, message: e.message });
    }
  };
  static update: IRouteController<{}, {}, {}, {}> = async (req, res) => {
    try {
      const companyCode = res.locals.companyCode;
      const device = req.body as IDevice;
      let data: Array<IDevice> = await deviceService.find(
        {
          companyCode: companyCode,
        },
        { device: device }
      );

      res.json({ data });
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  };
}
