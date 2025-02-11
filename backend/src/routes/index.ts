import { RequestHandler } from "express";
/** Metodos HTTP */
type IRouteMethod = "get" | "post" | "put" | "delete" | "patch";

/**
 * Controlador de Ruta Parametros:
 * - ReqParams = req.params (Parametros de Url)
 * - ResBody = res.body (Respuesta)
 * - ReqBody = req.body (Cuerpo de la peticion)
 * - ReqQuery = req.query (Parametros de la peticion)
 */

export type IRouteController<
  ReqParams = any,
  ResBody = any,
  ReqBody = any,
  ReqQuery = any
> = RequestHandler<ReqParams, ResBody, ReqBody, ReqQuery>;

/** Definicio de Ruta */
export interface IRoute {
  /** Endpoint */
  path: string;
  /** Etiqueta de la ruta */
  label: string;
  /** Endpoint oculto- Por defecto false */
  hide?: boolean;
  /** Controlador */
  controller: IRouteController;
  /** Metodo HTTP */
  method: IRouteMethod;
  /** Middleware: validacion de token. Por defecto true */
  auth?: boolean;
}

export type IRoutes = Array<IRoute>;

export const defineRoutes = (routes: IRoutes) => routes;
