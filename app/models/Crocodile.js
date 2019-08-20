class Crocodile {
  constructor(
    name = "",
    type = "",
    weight = 0,
    length = 0,
    aggressiveScale = 0,
    zone = ""
  ) {
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.length = length;
    this.aggressiveScale = aggressiveScale;
    this.zone = zone;
  }

  eat(food) {
    console.log(`Chomp chomp allthe ${food}ies.`)
  }
}

export default Crocodile;