import { Service } from ".";
import { DeviceModel, IDevice } from "../models/device";
import { IVaucher, VaucherModel } from "../models/vaucher";

export class DeviceService extends Service<IDevice> {
  constructor() {
    super(DeviceModel);
  }
}

export const deviceService = new DeviceService();
