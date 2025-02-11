import { DB } from "./libs/db";
import AppServer from "./libs/server";
import { IRoutes } from "./routes/index";

export interface IVaucherapiOptions {
  /**
   * Parametros de configuracion del servidor
   */
  server: {
    port: number;
    secret: string;
    ssl?: boolean;
  };
  /**
   * Parametros de configuracion de la BD
   */
  db: {
    /**
     * URI de conexion
     */
    uri: string;
  };
  /**
   * Scripts a ejecutar en el arranque
   * @defaultValue []
   */
  bootstrapScripts: Function[];
  routes: IRoutes;
}

const defaultOptions: IVaucherapiOptions = {
  server: {
    port: 3000,
    secret: "secret",
  },
  db: {
    uri: "mongodb://localhost:27017/vaucherapi",
  },
  bootstrapScripts: [],
  routes: [],
};

/**
 * Shift Management
 * @version 1.0.0
 * @author Ariel Niscola
 * @description Clase que inicializa servidor
 */

export class VaucherApi {
  /** Opciones de ininializacion */
  private static _options: IVaucherapiOptions;
  /** Flag para verificar si ha sido inicializada */
  private _initialized: boolean = false;

  constructor(options?: Partial<IVaucherapiOptions>) {
    this.setOptions(options);
  }

  private setOptions(options: Partial<IVaucherapiOptions> = defaultOptions) {
    VaucherApi._options = {
      ...defaultOptions,
      ...options,
    };
  }

  /**
   * Iniciar aplicacion
   */

  async init() {
    try {
      /** Checkear que servidor no este inicializado */
      if (this._initialized) {
        throw new Error("Servidor ya inicializado");
      }
      console.info("Iniciando servicios api");

      const options = VaucherApi._options;

      /** Conexion a la BD */
      await DB.connect(options.db.uri);

      /** Creamos el cliente AppServer */
      await AppServer.start(options.server.port, {
        routes: options.routes,
      });
      /** Marcamos al Servidor como inicializado */
      this._initialized = true;
      console.info(`Servidor inicializado: ${this._initialized}`);
    } catch (err) {
      console.error(err, `Error al iniciar servidor: ${err.message}`);
      throw err;
    }
  }
  /**
   * Obtiene configuracion
   * @param code Codigo de configuracion
   * @returns Valor de configuracion
   * @example
   * const port = ShifManagement.get('server.port')
   */
  static get(code: string): any {
    const value = code
      .split(".")
      .reduce((o: any, i) => o[i], VaucherApi._options);
    return value;
  }
}
export const defineOptions = (data: IVaucherapiOptions) => data;
export default VaucherApi;
