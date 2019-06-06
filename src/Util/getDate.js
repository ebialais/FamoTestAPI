export default function getDate(date){
    let newDate = new Date(date) 
    let day = newDate.getDate()
    let month = newDate.getMonth()
    let year = newDate.getFullYear()
    switch (month) {
        case 0 : 
            month = "Janvier"
            break;
        case 1 : 
            month = "Février"
            break;
        case 2 : 
            month = "Mars"
            break;
        case 3 : 
            month = "Avril"
            break;
        case 4 : 
            month = "Mai"
            break;
        case 5 : 
            month = "Juin"
            break;
        case 6 : 
            month = "Juillet"
            break;
        case 7 : 
            month = "Aout"
            break;
        case 8 : 
            month = "Septembre"
            break;
        case 9 : 
            month = "Octobre"
            break;
        case 10 : 
            month = "Novembre"
            break;
        case 11 : 
            month = "Décembre"
            break;
    }
    newDate = day + " " + month + " " + year
    console.log(newDate)
    return newDate
}