class Elephant {
  constructor(
    name = "",
    age = 0,
    tusked = true,
    type = "",
    weight = 0,
    gender = "",
    heightInch = 0,
    zone = ""
  ) {
    this.name = name;
    this.age = age;
    this.tusked = tusked;
    this.type = type;
    this.weight = weight;
    this.gender = gender;
    this.heightInch = heightInch;
    this.zone = zone;
  }

  eat(food) {
    console.log(`Chomp chomp allthe ${food}ies.`)
  }
}

export default Elephant;