//함수를 반환하는 함수
function createCalculatePrinter(calc: (a: number, b: number) => number, oper: string): (a: number, b: number) => void {
    return function(a: number, b: number){
        let result = calc(a, b);
        console.log(`${a} ${oper} ${b} = ${result}`);
    }
}

const addPrinter = createCalculatePrinter((a, b) => a + b, "+");
addPrinter(1, 2); // 1 + 2 = 3
const subPrinter = createCalculatePrinter((a, b) => a - b, "-");
subPrinter(1, 2); // 1 - 2 = -1