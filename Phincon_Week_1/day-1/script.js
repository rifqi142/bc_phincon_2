const table = document.querySelector("#tbl-bootcamp");

// es6 loop
function addRow(data) {
  const newRow = document.createElement("tr");

  for (const cellData of data) {
    const newCell = document.createElement("td");
    newCell.textContent = cellData;
    newRow.appendChild(newCell);
  }

  table.appendChild(newRow);
}

// for each loop
// function addRow(data) {
//   const newRow = document.createElement("tr");

//   data.forEach((cellData) => {
//     const newCell = document.createElement("td");
//     newCell.textContent = cellData;
//     newRow.appendChild(newCell);
//   });

//   table.appendChild(newRow);
// }

// format = [id, nameCourse, instructor, class code, student qty]
addRow([4, "Data Science", "lala", "DS", 5]);
addRow([5, "DEVOPS", "Muto", "DEVOPS", "10"]);
