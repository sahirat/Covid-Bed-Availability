
fetchData();
function fetchData() {

    fetch('https://api.rootnet.in/covid19-in/contacts').then((response) => {
        response.json().then((data) => {
            showed(data.data.contacts.regional);
        })
    })

}

function showed(u) {
    let table = document.getElementById('table');
    for (let i = 0; i < u.length; i++) {
        let obj = u[i];
        console.log(obj);
        let row = document.createElement('tr');
        let loc = document.createElement('td');
        let number = document.createElement('td');
       


        loc.innerHTML = obj.loc;
        number.innerHTML = obj.number;
     
        


        row.appendChild(loc);
        row.appendChild(number)
    



        table.appendChild(row);

    }
}

const searchFu = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {

        let td = tr[i].getElementsByTagName('td')[0];
        
        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }

        
    }

}

