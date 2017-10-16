class Human {
  public name: string;
  public height: number = -1;
  public weight: number = -1;
  public age: number = -1;

  public constructor(name: string, height: number, weight: number, age: number){
    this.name   = name;
    this.height = height;
    this.weight = weight;
    this.age    = age;
  }
}

interface Comparator {
  compare(h1: Human, h2: Human): number
}

class AgeComparator implements Comparator {
  compare(h1: Human, h2: Human){
    if(h1.age > h2.age){
      return 1;
    }
    else if (h1.age == h2.age){
      return 0;
    }
    else {
      return -1;
    }
  }
}

class HeightComparator implements Comparator {
  compare(h1: Human, h2: Human){
    if(h1.height > h2.height){
      return 1;
    }
    else if (h1.height == h2.height){
      return 0;
    }
    else {
      return -1;
    }
  }
}

class MyClass {
  comparator: Comparator = null;
  constructor(comparator: Comparator){
    this.comparator = comparator;
  }
  public compare(h1: Human, h2: Human): number{
    return this.comparator.compare(h1,h2);
  }
}

const h1 = new Human('hoge',180,70,25);
const h2 = new Human('fuga',170,60,30);

const ageChecker = new MyClass(new AgeComparator);
const h1AgeIsHigher = ageChecker.compare(h1,h2);
console.log(`h1: ${h1.age}, h2: ${h2.age}, h1AgeIsHigher: ${h1AgeIsHigher}`);

const heightChecker = new MyClass(new HeightComparator);
const h1HeightIsHigher = heightChecker.compare(h1,h2);
console.log(`h1: ${h1.height}, h2: ${h2.height}, h1HeightIsHigher: ${h1HeightIsHigher}`);


