


const clock = () => {
    let time = new Date()

    var hour = document.querySelector('.hours')
    var mins = document.querySelector('.minutes')
    var secs = document.querySelector('.seconds')
    var session = document.querySelector('#session')
    var h = time.getHours()
    var m = time.getMinutes()
    var s = time.getSeconds()


 

    if (h === 0) {
        h = 12
    }

    if (h > 12) {
        h = h - 12
        session.innerHTML= "PM"
    
    }

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hour.innerHTML = h
    mins.innerHTML = m
    secs.innerHTML = s



    setTimeout(clock, 1000)

}
clock()











// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// const randomNumber = ()=> {
//     return Math.floor(Math.random() * hex.length);
//   }

// const backgroundColor = () =>{
//   let hexColor = "#";

//     for(i = 0; i<6; i++){
//         hexColor += hex[randomNumber()]
//     }
// document.getElementById('imp').style.background =hexColor

// setTimeout(backgroundColor, 1000)
// }
// backgroundColor()