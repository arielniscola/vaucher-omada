import { createModel, createSchema } from ".";

export interface ICompany {
  code: string;
  companyName: string;
  address: string;
  companyNumber: string;
  cellphone: string;
  active: boolean;
  website: string;
}

const CompanySchema = createSchema<ICompany>({
  code: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  companyNumber: {
    type: String,
    required: false,
  },
  cellphone: {
    type: String,
    required: false,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  website: {
    type: String,
    required: false,
  },
});

export const CompanyModel = createModel("company", CompanySchema);
