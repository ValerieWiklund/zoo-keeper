class Goanna {
  constructor(
    name = "",
    type = "",
    length = 0,
    weight = 0,
    age = 0,
    zone = ""
  ) {
    this.name = name;
    this.type = type;
    this.length = length;
    this.weight = weight;
    this.age = age;
    this.zone = zone;
  }

  eat(food) {
    console.log(`Chomp chomp allthe ${food}ies.`)
  }


}

export default Goanna;