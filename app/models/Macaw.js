class Macaw {
  constructor(
    name = "",
    type = "",
    gender = "",
    wingspanInch = 0,
    idNumber = 0,
    zone = "",
    weight = 0
  ) {
    this.name = name;
    this.type = type;
    this.gender = gender;
    this.wingspanInch = wingspanInch;
    this.idNumber = idNumber;
    this.zone = zone;
    this.weight = weight;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
  }
}

export default Macaw;