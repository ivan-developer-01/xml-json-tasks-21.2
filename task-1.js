const parser = new DOMParser();

const xmlString = `<list>
<student>
  <name lang="en">
	<first>Ivan</first>
	<second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
	<first>Петр</first>
	<second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const result = {
	list: []
};
const list = xmlDOM.querySelector("list");
const students = list.querySelectorAll("student");

students.forEach(student => {
	const name = student.querySelector("name");
	const first = name.querySelector("first").textContent;
	const second = name.querySelector("second").textContent;
	const lang = name.getAttribute("lang");
	const age = student.querySelector("age").textContent;
	const prof = student.querySelector("prof").textContent;
	
	const objectToPush = {
		name: `${first} ${second}`,
		lang,
		age,
		prof
	};

	result.list.push(objectToPush);
});

console.log(result);
