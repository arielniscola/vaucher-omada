import { IVaucher } from "../models/vaucher";
import { IRouteController } from "../routes/index";
import { vaucherService } from "../services/vaucher";

export default class VaucherController {
  /** Buscar vaucher */
  static find: IRouteController<{}, {}, {}, {}> = async (req, res) => {
    try {
      const companyCode = res.locals.companyCode;
      let data: Array<IVaucher> = await vaucherService.find(
        {
          companyCode: companyCode,
        },
        {},
        { sort: { date: -1 } }
      );

      res.json({ data });
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  };

  static create: IRouteController<{}, {}, {}, {}> = async (req, res) => {
    try {
      const companyCode = res.locals.companyCode;
      let data = await vaucherService.createVaucherGrupo(companyCode);

      res.json({ data });
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  };
}
