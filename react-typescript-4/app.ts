// 환자 인터페이스
interface Patient {
  id: string;
  name: string;
  age: number;
  address: string;
}

// 의사 인터페이스
interface Doctor {
  id: string;
  name: string;
  specialty: string;
}

// 예약 인터페이스
interface Reservation {
  patient: Patient;
  doctor: Doctor;
  date: Date;
  time: string;
}

// 병원 클래스
class Hospital {
  patients: Patient[] = [];
  doctors: Doctor[] = [];
  reservations: Reservation[] = [];

  // 환자 등록
  registerPatient(patient: Patient): void {
    this.patients.push(patient);
  }

  // 의사 등록
  registerDoctor(doctor: Doctor): void {
    this.doctors.push(doctor);
  }

  // 예약 생성
  createReservation(patientId: string, doctorId: string, date: Date, time: string): Reservation | undefined {
    const patient = this.patients.find(p => p.id === patientId);
    const doctor = this.doctors.find(d => d.id === doctorId);

    if (patient && doctor) {
      const reservation: Reservation = {
        patient,
        doctor,
        date,
        time
      };
      this.reservations.push(reservation);
      return reservation;
    }
    return undefined;
  }

  // 예약 조회 (환자 ID)
  getReservationsByPatientId(patientId: string): Reservation[] {
    return this.reservations.filter(r => r.patient.id === patientId);
  }

  // 예약 조회 (의사 ID)
  getReservationsByDoctorId(doctorId: string): Reservation[] {
    return this.reservations.filter(r => r.doctor.id === doctorId);
  }
}

const hospital = new Hospital();

// 환자 등록
const patient1: Patient = { id: "p1", name: "김철수", age: 30, address: "서울시 강남구" };
const patient2: Patient = { id: "p2", name: "박영우", age: 27, address: "서울시 구로구" };
const patient3: Patient = { id: "p3", name: "오민서", age: 24, address: "서울시 구로구" };
const patient4: Patient = { id: "p4", name: "곽일찬", age: 17, address: "서울시 양천구" };
const patient5: Patient = { id: "p5", name: "서정민", age: 45, address: "서울시 강북구" };
hospital.registerPatient(patient1);

// 의사 등록
const doctor1: Doctor = { id: "d1", name: "박선생", specialty: "내과" };
const doctor2: Doctor = { id: "d2", name: "어선생", specialty: "외과" };
const doctor3: Doctor = { id: "d3", name: "남궁선생", specialty: "이비인후과" };
hospital.registerDoctor(doctor1);

// 예약 생성
const reservation = hospital.createReservation("p1", "d1", new Date("2024-03-15"), "10:00");
if (reservation) {
  console.log("예약 성공:", reservation);
} else {
  console.log("예약 실패");
}
hospital.createReservation("p2", "d1", new Date("2024-03-16"), "10:00");
hospital.createReservation("p3", "d1", new Date("2024-03-16"), "14:00");
hospital.createReservation("p4", "d2", new Date("2024-03-15"), "10:00");

// 예약 조회 (환자 ID)
const reservations = hospital.getReservationsByPatientId("p1");
console.log("환자 예약 조회:", reservations);

// 제네릭 함수 사용 (의사 찾기)
const doctor = hospital.doctors.find((d) => d.specialty === "내과")
if (doctor) {
  console.log("찾은 의사:", doctor);
}