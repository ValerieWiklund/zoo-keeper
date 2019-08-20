class RedPanda {
  constructor(
    name = "",
    color = "",
    gender = "",
    weight = 0,
    tailLengthInch = 0,
    age = 0,
    zone = ""
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.age = age;
    this.zone = zone;
  }
  eat(food) {
    console.log(`Chomp chomp allthe ${food}ies.`)
  }

}

export default RedPanda;