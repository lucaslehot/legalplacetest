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
      vidalEntry = this.vidal.drugs[drug.name];
      if (vidalEntry) {
        drug.benefit += vidalEntry.benefitEvolutionFunction(drug.expiresIn);
        drug.expiresIn += vidalEntry.expiresInEvolutionFunction(drug.expiresIn);
      } else {
        //I'd rather not have this default behaviour as unknown drugs should just throw an error.
        //However I'll keep it here for time limit and testing reasons.
        drug.benefit += this.vidal.defaultBenefitEvolutionFunction(drug.expiresIn);
        drug.expiresIn += this.vidal.defaultExpiresInEvolutionFunction(drug.expiresIn);
      }

      drug.benefit = Math.max(0, Math.min(50, drug.benefit));
    });

    return this.drugs;
  }
}
