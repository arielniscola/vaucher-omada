import { ICompany } from "../models/company";
import { IVaucher } from "../models/vaucher";
import { IRouteController } from "../routes/index";
import { companyService } from "../services/company";
import { vaucherService } from "../services/vaucher";

export default class CompanyController {
  /** Buscar compañias */
  static find: IRouteController<{}, {}, {}, {}> = async (req, res) => {
    try {
      const companyCode = res.locals.companyCode;
      let data: Array<ICompany> = await companyService.find(
        {
          companyCode: companyCode,
        },
        {},
        { sort: { date: -1 } }
      );
      res.json({ ack: 0, data: data });
    } catch (e) {
      return res.status(400).json({ ack: 1, message: e.message });
    }
  };

  static create: IRouteController = async (req, res) => {
    try {
      const company: ICompany = req.body;
      const exist = await companyService.findOne({ code: company.code });
      if (exist) throw new Error("Compañia ya existe");
      let data = await companyService.insertOne(company);
      if (!data) throw new Error("Error al crear la compañia");
      res.json({ ack: 0, message: "Compañia creada correctamente" });
    } catch (e) {
      return res.status(400).json({ ack: 1, message: e.message });
    }
  };
  static update: IRouteController = async (req, res) => {
    try {
      const company: ICompany = req.body;
      const exist = await companyService.findOne({ code: company.code });
      if (exist) throw new Error("Compañia ya existe");
      let data = await companyService.updateOne(
        { code: company.code },
        company
      );
      if (!data) throw new Error("Error al modificar la compañia");
      res.json({ ack: 0, message: "Compañia modificada correctamente" });
    } catch (e) {
      return res.status(400).json({ ack: 1, message: e.message });
    }
  };
}
