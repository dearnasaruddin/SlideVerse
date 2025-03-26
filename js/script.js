document.addEventListener("DOMContentLoaded", function () {

    // Selecting DOM Elements
    let slider = document.querySelector(".slider")
    let slides = document.querySelector(".slides");
    let dotsContainer = document.querySelector(".dots");
    let prevBtn = document.querySelector(".prev");
    let nextBtn = document.querySelector(".next");
    let slide = document.querySelectorAll(".slide");

    let slideCount = slide.length;
    let currentSlide = 0;


    // Create Dots
    for (let i = 0; i < slideCount; i++) {

        dotsContainer.innerHTML += `<div class="dot ${i == 0 && "active"}" data-index="${i}"></div>`

    }

    let dots = document.querySelectorAll(".dot");



    // Update Slider Function
    function updateSlider(index) {
        if (index >= slideCount) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slideCount - 1;
        } else {
            currentSlide = index
        }

        slides.style.transform = `translateX(${-currentSlide * 100}%)`;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active')
    }


    // Autoplay Funtion
    let stop = setInterval(() => {
        updateSlider(currentSlide + 1)
    }, 2500)

    slider.addEventListener("mouseover", () => {
        clearInterval(stop)
    })

    slider.addEventListener("mouseout", () => {
        stop = setInterval(() => {
            updateSlider(currentSlide + 1)
        }, 2500)
    })

    // Button Click Events
    prevBtn.addEventListener('click', function () {
        updateSlider(currentSlide - 1);
    })

    nextBtn.addEventListener('click', function () {
        updateSlider(currentSlide + 1);
    })

    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            let index = Number(dot.getAttribute('data-index'));
            updateSlider(index)
        })
    })

})