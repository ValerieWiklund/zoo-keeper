class SnowLeopard {
  constructor(
    name = "",
    weight = 0,
    gender = "",
    tailLengthInch = 0,
    age = 0,
    zone = ""
  ) {
    this.name = name;
    this.weight = weight;
    this.gender = gender;
    this.tailLengthInch = tailLengthInch;
    this.age = age;
    this.zone = zone;
  }
  eat(food) {
    console.log(`Chomp chomp allthe ${food}ies.`)
  }

}

export default SnowLeopard;