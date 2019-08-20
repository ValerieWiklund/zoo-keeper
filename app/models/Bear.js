class Bear {
  constructor(
    name = "",
    color = "",
    gender = "",
    weight = 0,
    zone = "",
    heightInch = 0,
    clawLengthInch = 0
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.zone = zone;
    this.heightInch = heightInch;
    this.clawLengthInch = clawLengthInch;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
  }

}


export default Bear;