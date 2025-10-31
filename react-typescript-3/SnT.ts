// 학생
type Student = {
  name: string;
  grade: number;
  school: string;
}

// 교사
type Teacher = {
  name: string;
  subject: string;
  students: string[];
}

// 빈칸 1: Student 또는 Teacher 타입을 가질 수 있는 Person 타입 정의 (Union Type 사용)
type Person = Student | Teacher;

// Person 타입에 따라 정보를 출력하는 함수
function printPersonInfo(person: Person) {
  console.log(`이름: ${person.name}`);
  // 빈칸 2: person이 Student 타입인지 Teacher 타입인지 확인하고 해당하는 정보 출력
  if("grade" in person) console.log(`학년: ${person.grade}\n학교: ${person.school}` );
  if("subject" in person) {
    console.log(`과목: ${person.subject}\n담당학생: `)
    person.students.forEach((std) => { console.log(std)});
  }
}

// 예시 사용
const student: Student = { name: "김철수", grade: 3, school: "A 초등학교" };
const teacher: Teacher = { name: "박선생", subject: "수학", students: ["김철수", "이영희"] };
const studentTeacher: Student & Teacher = { 
  name: "최선생", 
  grade: 5, 
  school: "B 초등학교", 
  subject: "과학", 
  students: ["박철수", "김영희"] 
};

printPersonInfo(student);
printPersonInfo(teacher);
printPersonInfo(studentTeacher);