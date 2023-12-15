export type ClientInformation = {
  name: string;
  dob: string;
  gender: string;
  maritalStatus: string;
  employmentStatus: string;
};

export type Financials = {
  income: number;
  expenses: number;
  savings: number;
  investment: number;
  debt: number;
  cashflow: number;
  networth: number;
};

export type Goals = {
  emergencyFund: number;
  travel: number;
};

export type Insurances = {
  lifeInsurance: number;
  personalAccident: number;
};

export type ClientProfile = {
  clientInformation: ClientInformation;
  financials: Financials;
  goals: Goals;
  insurances: Insurances;
};
