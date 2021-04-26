fetchD();
function fetchD() {

    fetch('https://api.rootnet.in/covid19-in/hospitals/beds').then((resp) => {
        resp.json().then(data => {
            Show(data.data.regional);
        })
    });

}
function Show(u) {
    let table = document.getElementById('table');
    for (let i = 0; i < u.length; i++) {
        let obj = u[i];
        console.log(obj);
        let row = document.createElement('tr');
        let state = document.createElement('td');
        let ruralHospitals = document.createElement('td');
        let ruralBeds = document.createElement('td');
        let urbanHospitals = document.createElement('td');
        let urbanBeds = document.createElement('td');
        let totalHospitals = document.createElement('td');
        let totalBeds = document.createElement('td');


        state.innerHTML = obj.state;
        ruralHospitals.innerHTML = obj.ruralHospitals;
        ruralBeds.innerHTML = obj.ruralBeds;
        urbanHospitals.innerHTML = obj.urbanHospitals;
        urbanBeds.innerHTML = obj.urbanBeds;
        totalHospitals.innerHTML = obj.totalHospitals;
        totalBeds.innerHTML = obj.totalBeds;




        row.appendChild(state);
        row.appendChild(ruralHospitals)
        row.appendChild(ruralBeds);
        row.appendChild(urbanHospitals);
        row.appendChild(urbanBeds);
        row.appendChild(totalHospitals);
        row.appendChild(totalBeds);


        table.appendChild(row);

    }
}




const search = () => {
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
