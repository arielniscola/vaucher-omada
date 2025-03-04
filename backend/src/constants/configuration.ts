import { IConfiguration } from "../models/configuration";

export const DEFAULT_CONFIGURATIONS: IConfiguration[] = [
  {
    code: "name",
    name: "Nombre",
    description: "Nombre del grupo del vaucher. 1-32 caracteres",
    type: "string",
    value: "Nombre Default",
  },
  {
    code: "amount",
    name: "Cantidad",
    description: "Cantidad de voucher creados. Rango de 1-500",
    type: "number",
    value: 100,
  },
  {
    code: "codeLength",
    name: "Digitos Código",
    description: "Cantidad de digitos del codigo. Rango 6-10",
    type: "number",
    value: 6,
  },
  {
    code: "codeForm",
    name: "Tipo codigo",
    description:
      "Tipo de caracteres del código. 0: Números, 1: Letras, 0,1: Letras y Números",
    type: "string",
    value: 6,
  },
  {
    code: "limitType",
    name: "Tipo Limite",
    description:
      "Tipo de caracteres del código. 0: Números, 1: Letras, 0,1: Letras y Números",
    type: "string",
    value: "0",
  },
  {
    code: "limitNum",
    name: "Número Límite",
    description:
      "El número de limitaciones debe estar dentro del rango de 1 a 999. Si el parámetro [limitType] es 0 o 1, [limitNum] no debe ser nulo. Cuando el parámetro [limitType] es 0, [limitNum] representa el número máximo de veces que este voucher puede ser utilizado. Cuando el parámetro [limitType] es 1, [limitNum] representa el número máximo de usuarios que pueden usar este voucher al mismo tiempo",
    type: "string",
    value: 6,
  },
  {
    code: "durationType",
    name: "Tipo Duración",
    description:
      "0: Duración por cliente: cada cliente expira después de que se haya utilizado la duración establecida. 1: Duración por voucher: después de alcanzar la duración del voucher, todos los clientes que lo estén utilizando expirarán.",
    type: "number",
    value: 0,
  },
  {
    code: "duration",
    name: "Duración",
    description: "Duracion una vez usado. En minutos",
    type: "number",
    value: 60,
  },
  {
    code: "timingType",
    name: "Temporizador",
    description:
      "0: Temporización por tiempo: los clientes pueden usar los vouchers durante una duración de tiempo específica. 1: Temporización por uso: los clientes pueden usar los vouchers según la duración del uso real.",
    type: "number",
    value: 0,
  },
];
