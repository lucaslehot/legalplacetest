class Vidal {
  constructor() {
    //Once the expiration date has passed, Benefit degrades twice as fast.
    this.defaultBenefitEvolutionFunction = (expiresIn) => {
      return expiresIn > 0 ? -1 : -2;
    }

    //"Herbal Tea" actually increases in Benefit the older it gets. Benefit increases twice as fast after the expiration date
    this.type1BenefitEvolutionFunction = (expiresIn) => {
      return expiresIn > 0 ? 1 : 2;
    }

    //"Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches.Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Benefit drops to 0 after the expiration date.
    this.type2BenefitEvolutionFunction = (expiresIn) => {
      if (expiresIn < 0) {
        return -51;
      }
      return expiresIn > 10 ? 1 : expiresIn > 5 ? 2 : 3;
    }

    //"Magic Pill" never expires nor decreases in Benefit.
    this.type3BenefitEvolutionFunction = (expiresIn) => {
      return 0;
    }

    //"Dafalgan" degrades in Benefit twice as fast as normal drugs.
    this.type4BenefitEvolutionFunction = (expiresIn) => {
      return expiresIn > 0 ? -2 : -4;
    }

    //At the end of each day our system lowers both values for every drug
    this.defaultExpiresInEvolutionFunction = (expiresIn) => {
      return -1;
    }

    //"Magic Pill" never expires nor decreases in Benefit.
    this.type1ExpiresInEvolutionFunction = (expiresIn) => {
      return 0;
    }

    this.drugs = {
      "Doliprane": {
        benefitEvolutionFunction: this.defaultBenefitEvolutionFunction,
        expiresInEvolutionFunction: this.defaultExpiresInEvolutionFunction
      },
      "Herbal Tea": {
        benefitEvolutionFunction: this.type1BenefitEvolutionFunction,
        expiresInEvolutionFunction: this.defaultExpiresInEvolutionFunction
      },
      "Fervex": {
        benefitEvolutionFunction: this.type2BenefitEvolutionFunction,
        expiresInEvolutionFunction: this.defaultExpiresInEvolutionFunction
      },
      "Magic Pill": {
        benefitEvolutionFunction: this.type3BenefitEvolutionFunction,
        expiresInEvolutionFunction: this.type1ExpiresInEvolutionFunction
      },
      "Dafalgan": {
        benefitEvolutionFunction: this.type4BenefitEvolutionFunction,
        expiresInEvolutionFunction: this.defaultExpiresInEvolutionFunction
      }
    }
  }
}

export default Vidal;