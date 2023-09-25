const rect = document.querySelector('#rect')

rect.addEventListener("mousemove", function (details) { //details here give the mouse location
    var rectlocation = rect.getBoundingClientRect(); //this gives the location of the rectangle
    var actuallocation = details.clientX - rectlocation.left

    if(actuallocation < rectlocation.width/2){
        
        let percent = 100 - (((actuallocation/200) * 100).toFixed(2))
        rect.style.backgroundColor = "red"
        rect.style.opacity = `${percent}%`
        console.log("left", percent)
    }
    else{
        let percent = (((actuallocation-200)/200) * 100).toFixed(2)
        console.log("right", percent)
        rect.style.backgroundColor = "blue"
        rect.style.opacity = `${percent}%`
    }
})