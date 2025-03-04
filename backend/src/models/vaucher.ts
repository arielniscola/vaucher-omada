import { createModel, createSchema } from ".";

export interface IVaucher {
  companyCode: string;
  idVaucher: string;
  active: boolean;
  description: string;
  amount: number;
  duration: number;
  createTime: Date;
  used: number;
}

const VaucherSchema = createSchema<IVaucher>({
  companyCode: {
    type: String,
    required: true,
  },
  idVaucher: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  createTime: {
    type: Date,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  amount: {
    type: Number,
    required: false,
  },
  used: {
    type: Number,
    required: true,
    default: 0,
  },
});

export const VaucherModel = createModel<IVaucher>("vaucher", VaucherSchema);
