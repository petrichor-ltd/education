gsap.registerPlugin(ScrollTrigger);


const textElements = gsap.utils.toArray('.smoke');

textElements.forEach((text, index) => {
    gsap.to(text, {
        //color: "black", 
        //y: -50,         
        opacity: 1,     
        scrollTrigger: {
            trigger: text,       
            start: "top 60%", 
            end: "top 70%",     
            scrub: true,          
        },
    });
});

const images = document.querySelectorAll('.BDCimage');
images.forEach((image) => {
  gsap.to(image, {
      opacity: 1,
      scrollTrigger: {
          trigger: image,
          start: "top 60%",
          end: "top 70%",
          scrub: true,
          toggleActions: "play reverse play reverse",
      },
    });
});

 

const targetTexts = document.querySelectorAll(".switch_text");
targetTexts.forEach((targetText) => {
  gsap.timeline({ repeat: -1, repeatDelay: 0 })
  .to(targetText, {
    duration: 0.75,
    
    // opacity: 0,
    onComplete: () => {
      if(targetText.textContent === "scientists") {
        targetText.textContent = "artists";
      }
      else if(targetText.textContent === "artists") {
        targetText.textContent = "scientists";
      }

      if(targetText.textContent === "科學家") {
        targetText.textContent = "藝術家";
      }
      else if(targetText.textContent === "藝術家") {
        targetText.textContent = "科學家";
      }
    },
  })
  .to(targetText, {
    duration: 0.75,
    
    // opacity: 1,
    ease: "power2.out",
  });
});





const salute = document.querySelector(".salutation-en");

gsap.timeline({ repeat: -1, repeatDelay: 0 })
.to(salute, {
  duration: 0.75,
  
  // opacity: 0,
  onComplete: () => {
    if(salute.textContent === "scientists") {
      salute.textContent = "artists";
    }
    else if(salute.textContent === "artists") {
      salute.textContent = "engineers";
    }
    else if(salute.textContent === "engineers") {
      salute.textContent = "designers";
    }
    else if(salute.textContent === "designers") {
      salute.textContent = "litterateurs";
    }
    else if(salute.textContent === "litterateurs") {
      salute.textContent = "scientists";
    }
  },
})
.to(salute, {
  duration: 0.75,
  // opacity: 1,
  ease: "power2.out",
});

const salute_tw = document.querySelector(".salutation-twn");

gsap.timeline({ repeat: -1, repeatDelay: 0 })
.to(salute_tw, {
  duration: 0.75,
  
  // opacity: 0,
  onComplete: () => {


    if(salute_tw.textContent === "科學家") {
      salute_tw.textContent = "藝術家";
    }
    else if(salute_tw.textContent === "藝術家") {
      salute_tw.textContent = "工程師";
    }
    else if(salute_tw.textContent === "工程師") {
      salute_tw.textContent = "設計師";
    }
    else if(salute_tw.textContent === "設計師") {
      salute_tw.textContent = "文學家";
    }
    else if(salute_tw.textContent === "文學家") {
      salute_tw.textContent = "科學家";
    }
    
  },
})
.to(salute_tw, {
  duration: 0.75,
  // opacity: 1,
  ease: "power2.out",
});

