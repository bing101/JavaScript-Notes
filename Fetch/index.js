const url = 'https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10';


/* 
city: "Amaravati"
​​country: "India"
id: "1"
last_update: "10-04-2020 03:00:00"​
pollutant_avg: "39"
pollutant_id: "PM2.5"
pollutant_max: "61"
pollutant_min: "18"
pollutant_unit: "NA"
state: "Andhra_Pradesh"
station: "Secretariat, Amaravati - APPCB"
*/
function ListData(){
    console.log('Fetching Data')
    fetch(url)
    .then( res => res.json() )
    .then( data => {
        console.log(data);
        const arr = data.records;
        Display(arr);
    } );
}

function Display(raw_data){
    let output_lst = [];
    const dom_lst = $('#data-list');
    raw_data.forEach(element => {
        let lst = `<ol> <li> ${element.city}, ${element.state} </li> <li> Max Pollutant: ${element.pollutant_max} </li> <li> Min Pollutant: ${element.pollutant_min} </li> <li> Average Pollutant: ${element.pollutant_avg} </li></ol> <hr/>`
        output_lst.push(lst);
    });

    output_lst.forEach( i => dom_lst.append(i) );

}
