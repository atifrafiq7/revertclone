 const visibleItems = 4;
    const totalItems = 7;
    let index = 0;

    const track = document.getElementById("track");

    function updatePosition() {
      track.style.transition = "transform 0.5s ease-in-out";
      track.style.transform = `translateX(-${index * (100 / visibleItems + 1.5)}%)`;
    }

    function nextSlide() {
      index++;
      updatePosition();

      if (index === totalItems) {
        setTimeout(() => {
          track.style.transition = "none";
          track.style.transform = "translateX(0)";
          index = 0;
        }, 500);
      }
    }

    function prevSlide() {
      if (index === 0) {
        index = totalItems;
        track.style.transition = "none";
        track.style.transform = `translateX(-${index * (100 / visibleItems + 1.5)}%)`;
        setTimeout(() => {
          index--;
          updatePosition();
        }, 20);
      } else {
        index--;
        updatePosition();
      }
    }






//     let main = document.getElementById("main")
// let loader = document.getElementById('loader')

//     setTimeout(()=>{
// main.style.display = "block"
// loader.style.display= "none"
//     },3000)


    