import { Service } from ".";
import { DEFAULT_CONFIGURATIONS } from "../constants/configuration";
import { ConfigurationModel, IConfiguration } from "../models/configuration";
import { companyService } from "./company";

export class ConfigurationService extends Service<IConfiguration> {
  constructor() {
    super(ConfigurationModel);
  }

  async createConfigByDefault(companyCode: string) {
    try {
      DEFAULT_CONFIGURATIONS.forEach(
        (conf) => (conf.companyCode = companyCode)
      );
      await this.insertMany(DEFAULT_CONFIGURATIONS);
    } catch (error) {
      console.log(error);
    }
  }
}

export const configurationService = new ConfigurationService();
