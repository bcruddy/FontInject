class Font {
  family: string;
  filename: string;
  weight: number;

  constructor(family: string, filename: string, weight: number = 400) {
    this.family = family;
    this.filename = filename;
    this.weight = weight;
  }
}