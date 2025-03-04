import { insertManyOptions, Service } from ".";
import { IVaucher, VaucherModel } from "../models/vaucher";

export class VaucherService extends Service<IVaucher> {
  constructor() {
    super(VaucherModel);
  }

  async createVaucherGrupo(companyCode: string) {}
}

export const vaucherService = new VaucherService();
