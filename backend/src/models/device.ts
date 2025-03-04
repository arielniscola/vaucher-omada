import { createModel, createSchema } from ".";

export type Status = "connected" | "disconnected" | "inactived";

export interface IDevice {
  description: string;
  host: string;
  port: number;
  username: string;
  password: string;
  idDevice: string;
  omadaId: string;
  siteId: string;
  status: Status;
  companyCode: string;
}

const DeviceSchema = createSchema<IDevice>({
  description: {
    type: String,
    required: true,
  },
  host: {
    type: String,
    required: true,
  },
  port: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  idDevice: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "disconnected",
  },
  siteId: {
    type: String,
    required: false,
  },
  omadaId: {
    type: String,
    required: false,
  },
  companyCode: {
    type: String,
    required: true,
  },
});

export const DeviceModel = createModel<IDevice>("device", DeviceSchema);
