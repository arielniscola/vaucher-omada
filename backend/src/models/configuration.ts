import mongoose from "mongoose";
import { createModel, createSchema } from ".";

export interface IConfiguration {
  code: string;
  name: string;
  description: string;
  type: string;
  value: string | number | boolean;
  companyCode?: string;
}

const ConfigurationSchema = createSchema<IConfiguration>({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  companyCode: {
    type: String,
    required: true,
  },
});

export const ConfigurationModel = createModel<IConfiguration>(
  "configuration",
  ConfigurationSchema
);
