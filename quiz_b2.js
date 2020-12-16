function flatten(arr) {
	const newArray = [];
	if (!arr) return [];
	for (let item of arr) {
		if (typeof item === "function") {
			newArray.push(item())
		} else if (Array.isArray(item)) {
			newArray.push(...flatten(item))
		} else {
			newArray.push(item)
		}
	};
	return newArray;
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
	console.log(obj.index + ": ", JSON.stringify(flatten(obj.input)) === JSON.stringify(obj.output));
}
test({
	index: 1,
	input: [1, '2', [3, [4], function () { return 'five'; }]],
	output: [1, '2', 3, 4, 'five']
});
test({
	index: 2,
	input: [1],
	output: [1]
});
test({
	index: 3,
	input: null,
	output: []
});
test({
	index: 4,
	input: [],
	output: []
});
test({
	index: 5,
	input: [[1, '2', [3, function () { return 4; }, ['five'], 'six', true, { prop: 'val' }]]],
	output: [1, "2", 3, 4, "five", "six", true, { prop: 'val' }]
});
