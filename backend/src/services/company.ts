import { insertManyOptions, Service } from ".";
import { CompanyModel, ICompany } from "../models/company";

export class CompanyService extends Service<ICompany> {
  constructor() {
    super(CompanyModel);
  }

  /**
   * Crear una compania
   * @param data Datos de la compania
   * @returns Compania creada
   */
  async insertOne(data: Partial<ICompany>, options?: insertManyOptions) {
    try {
      let company;
      // Insertamos la compania con el metodo de la clase padre
      company = await super.insertOne(data, {
        ...options,
      });

      return company;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}

export const companyService = new CompanyService();
