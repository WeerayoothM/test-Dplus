function makeTitle(str) {
	let splitStr = str.split(" ");
	splitStr = splitStr.map((item) => {
		return item[0].toUpperCase() + item.slice(1)
	})
	return splitStr.join(" ")
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
	console.log(obj.index + ": ", makeTitle(obj.input) === obj.output);
}
test({
	index: 1,
	input: "I am a title",
	output: "I Am A Title"
});
test({
	index: 2,
	input: "I AM A TITLE",
	output: "I AM A TITLE"
});
test({
	index: 3,
	input: "i aM a tITLE",
	output: "I AM A TITLE"
});
test({
	index: 4,
	input: "the first letter of every word is capitalized",
	output: "The First Letter Of Every Word Is Capitalized"
});
test({
	index: 5,
	input: "I Like Pizza",
	output: "I Like Pizza"
});
test({
	index: 6,
	input: "Don't count your ChiCKens BeFore They HatCh",
	output: "Don't Count Your ChiCKens BeFore They HatCh"
});
test({
	index: 7,
	input: "All generalizations are false, including this one",
	output: "All Generalizations Are False, Including This One"
});
test({
	index: 8,
	input: "Me and my wife lived happily for twenty years and then we met.",
	output: "Me And My Wife Lived Happily For Twenty Years And Then We Met."
});
test({
	index: 9,
	input: "There are no stupid questions, just stupid people.",
	output: "There Are No Stupid Questions, Just Stupid People."
});
test({
	index: 10,
	input: "1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d",
	output: "1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d"
});
test({
	index: 11,
	input: "PIZZA PIZZA PIZZA",
	output: "PIZZA PIZZA PIZZA"
});
