document.getElementsByClassName(".mycard")
document.getElementsByClassName(".card")
document.getElementsByClassName(".prev")
document.getElementsByClassName(".next")
    var mycard= card(".mycard", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      clickable:true,
      
      next: {
        next: ".next-button",
        prev: ".prev-button",
      },
    });
