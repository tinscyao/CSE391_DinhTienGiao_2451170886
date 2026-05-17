// student_data.js

const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// Biến thống kê
let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

let maxStudent = students[0];
let minStudent = students[0];

let totalMath = 0;
let totalPhysics = 0;
let totalCS = 0;

// Bonus: theo giới tính
let maleTotal = 0;
let femaleTotal = 0;
let maleCount = 0;
let femaleCount = 0;

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

for (let i = 0; i < students.length; i++) {
    let s = students[i];

    // Tính điểm trung bình
    let avg = s.math * 0.4 + s.physics * 0.3 + s.cs * 0.3;

    // Làm tròn 1 chữ số thập phân
    avg = Number(avg.toFixed(1));

    // Gán TB vào object
    s.avg = avg;

    // Xếp loại
    let rank = "";

    if (avg >= 8.0) {
        rank = "Giỏi";
        gioi++;
    } else if (avg >= 6.5) {
        rank = "Khá";
        kha++;
    } else if (avg >= 5.0) {
        rank = "Trung bình";
        trungBinh++;
    } else {
        rank = "Yếu";
        yeu++;
    }

    s.rank = rank;

    // In bảng
    console.log(
        `| ${i + 1} | ${s.name} | ${avg} | ${rank} |`
    );

    // Tìm cao nhất
    if (avg > maxStudent.avg || maxStudent.avg === undefined) {
        maxStudent = s;
    }

    // Tìm thấp nhất
    if (avg < minStudent.avg || minStudent.avg === undefined) {
        minStudent = s;
    }

    // Tổng điểm từng môn
    totalMath += s.math;
    totalPhysics += s.physics;
    totalCS += s.cs;

    // Bonus theo giới tính
    if (s.gender === "M") {
        maleTotal += avg;
        maleCount++;
    } else {
        femaleTotal += avg;
        femaleCount++;
    }
}

// Đếm số lượng xếp loại
console.log("\n=== THỐNG KÊ XẾP LOẠI ===");
console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", trungBinh);
console.log("Yếu:", yeu);

// Sinh viên cao nhất và thấp nhất
console.log("\n=== SINH VIÊN ĐIỂM CAO NHẤT ===");
console.log(maxStudent.name, "-", maxStudent.avg);

console.log("\n=== SINH VIÊN ĐIỂM THẤP NHẤT ===");
console.log(minStudent.name, "-", minStudent.avg);

// Điểm TB toàn lớp từng môn
let avgMath = (totalMath / students.length).toFixed(1);
let avgPhysics = (totalPhysics / students.length).toFixed(1);
let avgCS = (totalCS / students.length).toFixed(1);

console.log("\n=== ĐIỂM TB TOÀN LỚP ===");
console.log("Math:", avgMath);
console.log("Physics:", avgPhysics);
console.log("CS:", avgCS);

// Bonus: điểm TB theo giới tính
let maleAvg = (maleTotal / maleCount).toFixed(1);
let femaleAvg = (femaleTotal / femaleCount).toFixed(1);

console.log("\n=== ĐIỂM TB THEO GIỚI TÍNH ===");
console.log("Nam:", maleAvg);
console.log("Nữ:", femaleAvg);