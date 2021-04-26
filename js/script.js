
fetchData();
function fetchData() {

    fetch('https://api.rootnet.in/covid19-in/hospitals/medical-colleges').then((response) => {
        response.json().then((data) => {
            Showed(data.data.medicalColleges)
        })
    })

}

function Showed(u) {
    let table = document.getElementById('table');
    for (let i = 0; i < u.length; i++) {
        let obj = u[i];
        console.log(obj);
        let row = document.createElement('tr');
        let state = document.createElement('td');
        let name = document.createElement('td');
        let city = document.createElement('td');
        let ownership = document.createElement('td');
        let admissionCapacity = document.createElement('td');
        let hospitalBeds = document.createElement('td');
   

        state.innerHTML = obj.state;
        name.innerHTML = obj.name;
        city.innerHTML = obj.city;
        ownership.innerHTML = obj.ownership;
        admissionCapacity.innerHTML = obj.admissionCapacity;
        hospitalBeds.innerHTML = obj.hospitalBeds;
    
 

        row.appendChild(state);
        row.appendChild(name)
        row.appendChild(city);
        row.appendChild(ownership);
        row.appendChild(admissionCapacity);
        row.appendChild(hospitalBeds);
    
      

        table.appendChild(row);
       
    }
}

const searchFun = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++)
    {
     

        let td = tr[i].getElementsByTagName('td')[0];
        let td1 = tr[i].getElementsByTagName('td')[1];
        let td2 = tr[i].getElementsByTagName('td')[2];

        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
        if (td1) {
            let textvalue = td1.textContent || td1.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
        if (td2) {
            let textvalue = td2.textContent || td2.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }

}

