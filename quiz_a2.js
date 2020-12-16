function removeDup(arr) {
  return Array.from(new Set(arr))
}

// =====================================
// ไฟล์ส่วนล่างนี้เป็นตัวอย่าง input output (test case)
// ห้ามแก้ไข!
// วิธีการรันคือ
//   1. เปิด terminal
//   2. cd เข้ามาที่โปรเจ็คปัจจุบัน
//   3. รัน node เว้นวรรค ตามด้วยชื่อไฟล์
//   4. หาก โปรแกรมทำงานถูกต้องจะขึ้น true ทั้งหมด
// =====================================
function test(obj) {
  console.log(obj.index + ": ", JSON.stringify(removeDup(obj.input)) === JSON.stringify(obj.output));
}
test({
  index: 1,
  input: ["John", "Taylor", "John"],
  output: ["John", "Taylor"]
});
test({
  index: 2,
  input: ["John", "Taylor", "John", "john"],
  output: ["John", "Taylor", "john"]
});
test({
  index: 3,
  input: ["javascript", "python", "python", "ruby", "javascript", "c", "ruby"],
  output: ["javascript", "python", "ruby", "c"]
});
test({
  index: 4,
  input: [1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5],
  output: [1, 2, 3, 5, 6, 7]
});
test({
  index: 5,
  input: ["#", "#", "%", "&", "#", "$", "&"],
  output: ["#", "%", "&", "$"]
});
test({
  index: 6,
  input: [3, "Apple", 3, "Orange", "Apple"],
  output: [3, "Apple", "Orange"]
});
