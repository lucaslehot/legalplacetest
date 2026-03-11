import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drug = new Drug("test", 2, 3);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(1);
    expect(drug.benefit).toBe(2);
  });

  it("should not decrease the benefit below 0", () => {
    const drug = new Drug("test", 2, 0);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(1);
    expect(drug.benefit).toBe(0);
  });

  it("should not increase the benefit above 50", () => {
    const drug = new Drug("Herbal Tea", 2, 50);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(1);
    expect(drug.benefit).toBe(50);
  });

  it("should decrease the benefit twice as fast after the expiration date", () => {
    const drug = new Drug("test", 0, 10);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(8);
  });

  it("should increase the benefit and decrease expiresIn for Herbal Tea", () => {
    const drug = new Drug("Herbal Tea", 2, 3);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(1);
    expect(drug.benefit).toBe(4);
  });

  it("should increase the benefit twice as fast after the expiration date for Herbal Tea", () => {
    const drug = new Drug("Herbal Tea", 0, 3);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(5);
  });

  it("should never change the benefit or expiresIn for Magic Pill", () => {
    const drug = new Drug("Magic Pill", 2, 3);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(2);
    expect(drug.benefit).toBe(3);
  });

  it("should increase the benefit for Fervex when the expiration date is more than 10 days", () => {
    const drug = new Drug("Fervex", 11, 3);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(10);
    expect(drug.benefit).toBe(4);
  });

  it("should double the benefit increase for Fervex when the expiration date is 10 days or less", () => {
    const drug = new Drug("Fervex", 10, 3);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(9);
    expect(drug.benefit).toBe(5);
  });

  it("should triple the benefit increase for Fervex when the expiration date is 5 days or less", () => {
    const drug = new Drug("Fervex", 5, 3);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(4);
    expect(drug.benefit).toBe(6);
  });

  it("should set the benefit to 0 when the expiration date is passed", () => {
    const drug = new Drug("Fervex", -1, 3);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(-2);
    expect(drug.benefit).toBe(0);
  });

  it("should decrease the benefit for Dafalgan twice as fast as normal drugs", () => {
    const drug = new Drug("Dafalgan", 2, 3);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(1);
    expect(drug.benefit).toBe(1);
  });

  it("should decrease the benefit for Dafalgan twice as fast as normal drugs after the expiration date", () => {
    const drug = new Drug("Dafalgan", 0, 5);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(1);
  });

});