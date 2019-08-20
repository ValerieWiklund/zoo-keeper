class Wallaby {
  constructor(
    name = "",
    gender = "",
    age = "",
    lengthInch = 0,
    zone = ""
  ) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.lengthInch = lengthInch;
    this.zone = zone;
  }

  eat(food) {
    console.log(`Chomp chomp all the${food}ies.`)
  }
}