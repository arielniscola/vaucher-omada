import { AuthenticationController } from "./controllers/authentication";
import CompanyController from "./controllers/compay";
import ConfigurationController from "./controllers/configuration";
import DeviceController from "./controllers/device";
import UserController from "./controllers/user";
import VaucherController from "./controllers/vaucher";
import { defineRoutes } from "./routes/index";

/**
 * Declaracion de Rutas.
 * Cada ruta pertenece a una agrupacion.
 * Cada agrupacion conformara un menu principal, y cada ruta, un sub-menu.
 *
 * Las rutas son un array donde cada objeto es un menu.
 * Cada menu tiene las propiedades:
 *  - label: Etiqueta del menu
 *  - icon: Icono a mostrar
 *  - routes: Un array de las rutas del menu (sub-menu)
 * Cada objeto en routes (sub-menu) tiene las propiedades:
 *  - path: Ruta absoluta al controlador
 *  - label: Etiqueta del sub-menu
 *  - method: Metodo HTTP
 *  - controller: Controlador para la ruta
 *  - auth: Define si requiere autenticacion. Por defecto true.
 *
 * Para ver todas las definiciones disponibles, ver la interfaz IRoute.
 */
const routes = defineRoutes([
  // Users

  {
    path: "/users",
    label: "Usuarios",
    method: "post",
    controller: UserController.create,
    auth: false,
  },
  // Authentication
  {
    path: "/users/login",
    label: "Usuarios",
    method: "post",
    controller: AuthenticationController.login,
    auth: false,
  },
  // Configuracion
  {
    path: "/settings",
    label: "Configuraciones",
    method: "put",
    controller: ConfigurationController.update,
    auth: false,
  },
  {
    path: "/settings",
    label: "Configuraciones",
    method: "get",
    controller: ConfigurationController.find,
    auth: false,
  },
  // Vaucher
  {
    path: "/vauchers",
    label: "Tickets",
    method: "get",
    controller: VaucherController.find,
    auth: false,
  },
  {
    path: "/vauchers",
    label: "Tickets",
    method: "post",
    controller: VaucherController.create,
    auth: false,
  },
  // Compañias
  {
    path: "/companies",
    label: "Compañias",
    method: "post",
    controller: CompanyController.create,
    auth: false,
  },
  {
    path: "/companies",
    label: "Compañias",
    method: "get",
    controller: CompanyController.find,
    auth: false,
  },
  {
    path: "/companies",
    label: "Compañias",
    method: "put",
    controller: CompanyController.update,
    auth: false,
  },
  // Devices
  {
    path: "/devices",
    label: "Dispositivos",
    method: "post",
    controller: DeviceController.create,
    auth: false,
  },
  {
    path: "/devices",
    label: "Dispositivos",
    method: "get",
    controller: DeviceController.find,
    auth: false,
  },
]);

export default routes;
