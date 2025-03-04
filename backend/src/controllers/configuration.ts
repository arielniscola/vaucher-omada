import { IConfiguration } from "../models/configuration";
import { IRouteController } from "../routes/index";
import { configurationService } from "../services/configuration";

export default class ConfigurationController {
  /** Buscar configuraciones */
  static find: IRouteController<{}, {}, {}, {}> = async (req, res) => {
    try {
      const companyCode = res.locals.companyCode;
      let data: Array<IConfiguration> = await configurationService.find(
        {
          companyCode: companyCode,
        },
        {}
      );

      res.json({ data });
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  };

  static update: IRouteController<{}, {}, { data: IConfiguration }, {}> =
    async (req, res) => {
      try {
        const configuration: IConfiguration = req.body.data;
        const companyCode = res.locals.companyCode;
        /** Verificar tipo de dato */
        let config = await configurationService.findOne({
          companyCode: companyCode,
          code: configuration.code,
        });
        if (!config) throw new Error("Configuración no encontrada");
        if (configuration.type !== typeof configuration.value)
          throw new Error("Tipo de dato incorrecto");
        let resp = await configurationService.updateOne(
          {
            companyCode: companyCode,
            code: configuration.code,
          },
          { configuration }
        );
        if (!resp) throw new Error("Error al actualizar configuracion");
        res.json({ resp });
      } catch (e) {
        return res.status(400).json({ message: e.message });
      }
    };
}
