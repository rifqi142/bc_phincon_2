const router = express.Router();

const students = [
  {
    id: 1,
    name: "John Doe",
    age: 20,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 21,
  },
  {
    id: 3,
    name: "Smith",
    age: 22,
  },
];

render.get("/", (req, res) => {
  res.json(students);
});

router.get("/id/:id", (req, res) => {
  const { id } = req.params;
  const student = students.find((student) => student.id === parseInt(id));
  if (student) {
    res.json(student);
  } else {
    res.status(404).send("Student not found");
  }
});

router.get("/name/:name", (req, res) => {
  const { name } = req.params;
  const student = students.find((student) => student.name === name);
  if (student) {
    res.json(student);
  } else {
    res.status(404).send("Student not found");
  }
});

module.exports = router;
