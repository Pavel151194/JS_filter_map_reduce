const courses = [
	{
		id: 1,
		faculty: "History department",
		subjects: ["The World History", "History of Rome"],
		countStudents: 44
	}, 
	{
		id: 2,
		faculty: "Department of Biology",
		subjects: ["biology", "chemistry"],
		countStudents: 50
	},
	{
		id: 3,
		faculty: "Faculty of Mathematics",
		subjects: ["mathematics", "geometry", "trigonometry"],
		countStudents: 72
	},
	{
		id: 4,
		faculty: "Faculty of Design",
		subjects: ["ui", "ux", "graphic design"],
		countStudents: 37
	}
]

//1.
const faculties = courses.reduce( (acc, { faculty }) => ([...acc, faculty]), [] )
console.log(faculties)

//2.
const subjects = courses.reduce( (acc, { subjects }) => ([...acc, ...subjects]), [] )
console.log(subjects)

//3.
const numberOfStudents = courses.reduce( (acc, { countStudents }) => (acc + countStudents), null )
console.log(numberOfStudents)

//4.
const facultiesBySubjects = courses.reduce( (acc, { faculty, subjects }) => ({ ...acc, [faculty]: subjects }), {} )
console.log(facultiesBySubjects)