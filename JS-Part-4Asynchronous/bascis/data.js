let employees = [
    { 'id': 101, name: "Rahul", sal: 45000 },
    { 'id': 102, name: "Kumar", sal: 55000 },
    { 'id': 103, name: "Arun", sal: 65000 },
    { 'id': 104, name: "Modi", sal: 75000 },
    { 'id': 105, name: "Varma", sal: 85000 },
]


function displayData() {
    //alert(123)
    let rows = ""
    for (emp of employees) {
        rows = rows + `<tr>
               <td>${emp.id}</td>
               <td>${emp.name}</td>
               <td>${emp.sal}</td>
               </tr>`
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows
}