// 응시X [7:공이범]

// unknown 타입 값을 처리하는 함수
function processUnknownValue(value: unknown) {
  //value가 string 타입인지 확인하고, string 타입일 경우 길이를 출력
  if (typeof value === "string"){
    console.log(value.length);
  }
  //value가 object 타입인지 확인하고, object 타입일 경우 name 속성 출력
  else if (typeof value === "object" && value != null &&"name" in value ){
    console.log(value.name);
  }
  else{
    console.log("etc");
  }
}

// any 타입 값을 처리하는 함수
function processAnyValue(value: any) {
  // value의 타입을 확인하고, 각 타입에 따라 다른 처리 수행
  // (예: number 타입일 경우 2배 곱하기, string 타입일 경우 대문자로 변환, array 타입일 경우 모든 요소 출력)
    if(typeof value === "number"){
        console.log(value*2);
    }else if(typeof value === "string"){
        console.log(value.toUpperCase());
    }else if(typeof value === "object" && Array.isArray(value)){
        value.forEach((num) => console.log(num));
    }else{
    console.log("etc");
    }
}

// unknown 타입 변수
let unknownValue: unknown;

unknownValue = 10;
processUnknownValue(unknownValue);
unknownValue = "hello";
processUnknownValue(unknownValue);
unknownValue = { name: "John", age: 30 };
processUnknownValue(unknownValue);

// any 타입 변수
let anyValue: any;

anyValue = 20;
processAnyValue(anyValue);
anyValue = "world";
processAnyValue(anyValue);
anyValue = [1, 2, 3];
processAnyValue(anyValue);
