import Vidal from "./vidal";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
    this.vidal = new Vidal();
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      if (this.vidal.drugs[drug.name]) {
        drug.benefit += this.vidal.drugs[drug.name].benefitEvolutionFunction(drug.expiresIn);
        drug.expiresIn += this.vidal.drugs[drug.name].expiresInEvolutionFunction(drug.expiresIn);
      } else {
        drug.benefit -= 1;
        drug.expiresIn -= 1;
      }
    });

    return this.drugs;
  }
}
