class Vidal {
  constructor() {
    this.drugs = {
      "Doliprane": {
        name: "Doliprane",
        benefitEvolutionFunction: this.defaultBenefitEvolutionFunction
      },
      "Herbal Tea": {
        name: "Herbal Tea",
        benefitEvolutionFunction: this.type1BenefitEvolutionFunction
      },
      "Fervex": {
        name: "Fervex",
        benefitEvolutionFunction: this.type2BenefitEvolutionFunction
      },
      "Magic Pill": {
        name: "Magic Pill",
        benefitEvolutionFunction: this.type3BenefitEvolutionFunction
      },
      "Dafalgan": {
        name: "Dafalgan",
        benefitEvolutionFunction: this.type4BenefitEvolutionFunction
      }
    }

    this.defaultBenefitEvolutionFunction = (expiresIn) => {
      return expiresIn > 0 ? -1 : -2;
    }

    this.type1BenefitEvolutionFunction = (expiresIn) => {
      return expiresIn > 0 ? 1 : 2;
    }

    this.type2BenefitEvolutionFunction = (expiresIn) => {
      if (expiresIn < 0) {
        return -51;
      }
      return expiresIn > 10 ? 1 : expiresIn > 5 ? 2 : 3;
    }

    this.type3BenefitEvolutionFunction = (expiresIn) => {
      return 0;
    }

    this.type4BenefitEvolutionFunction = (expiresIn) => {
      return expiresIn > 0 ? -2 : -4;
    }
  }
}

export default Vidal;