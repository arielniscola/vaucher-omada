interface IVaucherGroup {
  id: string;
  name: string;
  createdTime: number;
  creatorName: string;
  limitType: number;
  limitNum: number;
  durationType: number;
  duration: number;
  timingType: number;
  rateLimit: IRateLimit;
  trafficLimitEnable: boolean;
  trafficLimit: number;
  trafficLimitFrequency: number;
  unitPrice?: number;
  currency?: string;
  applyToAllPortals: boolean;
  portals?: string[];
  expirationTime?: number;
  effectiveTime?: number;
  logout?: boolean;
  description?: string;
  printComments?: string;
}

interface IRateLimit {
  mode: number;
  rateLimitProfileId?: string;
  customRateLimit: ICustomRateLimit;
}

interface ICustomRateLimit {
  downLimitEnable: boolean;
  downLimit?: number;
  upLimitEnable: boolean;
  upLimit?: number;
}

class Omada {
  constructor() {}

  async connect() {}

  async getToken() {}

  async createVaucherGroup() {}

  async getUnsedVaucher() {}

  async getVoucerSummary() {}
}
