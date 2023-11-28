const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

window.addEventListener("load", () => {
  const tableWrapper = document.getElementById("mountains");
  const table = document.createElement("table");
  const headers = Object.keys(MOUNTAINS[0]);
  table.appendChild(document.createElement("tr"));
  const tableHeaderElement = table.firstChild;
  headers.forEach((header) => {
    const headerElement = document.createElement("th");
    const innerText = document.createTextNode(header);
    headerElement.appendChild(innerText);
    tableHeaderElement.appendChild(headerElement);
  });

  MOUNTAINS.forEach((item) => {
    table.appendChild(document.createElement("tr"));
    const tableContents = table.lastChild;
    headers.forEach((key) => {
      const tdElement = document.createElement("td");
      const textNode = document.createTextNode(item[key]);
      tdElement.appendChild(textNode);
      tableContents.appendChild(tdElement);
    });
  });

  tableWrapper.appendChild(table);
  const allTds = document.querySelectorAll("td");
  allTds.forEach((td) => {
    td.style.textAlign = "center";
  });
});
