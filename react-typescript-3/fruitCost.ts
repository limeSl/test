// 과일 종류를 나타내는 열거형
enum Fruit {
  Apple,
  Banana,
  Orange,
  Grape,
  Mango,
}

// 과일 가격을 저장하는 객체
const fruitPrices: { [key in Fruit]: number } = {
  [Fruit.Apple]: 1000,
  [Fruit.Banana]: 500,
  [Fruit.Orange]: 800,
  [Fruit.Grape]: 300,
  [Fruit.Mango]: 2000,
};

// 과일 이름을 key로 사용하여 가격을 조회하는 함수
function getFruitPrice(fruit: Fruit): number {
  return fruitPrices[fruit];
}

// 예시 사용
const MangoPrice = getFruitPrice(Fruit.Mango);
console.log(`망고 가격: ${MangoPrice}원`);
