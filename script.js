const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true

  }

})


  document.querySelectorAll('.section-work__item').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.section-work__item').forEach(function(btn) {
    btn.classList.remove('section-work__item--active')});
    e.currentTarget.classList.add('section-work__item--active');

    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')});

      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
      });
      });


      $( function() {
        $( "#accordion" ).accordion({
           icons: false,
           heightStyle: "content",
           collapsible: true,
           active: false
         });
       } );


        window.addEventListener('DOMContentLoaded', function() {
          document.querySelector('#burger').addEventListener('click', function() {
              document.querySelector('#menu').classList.toggle('is-active')
          })

          document.querySelector(".header-top__burger").addEventListener("click", function() {
            this.classList.toggle("active");
            });

          document.querySelectorAll('.text').forEach(function(el) {
              el.addEventListener('click', function(event) {
                  console.log(event)
                  event.target.classList.toggle('alert')
              })
          })
      })

      document.querySelector(".header-btn__open").addEventListener("click", function() {
        document.querySelector(".form").classList.add("form__active");
        this.classList.add("active");
      })

      document.addEventListener("click", function(e) {
        let target = e.target;
        let form = document.querySelector(".form");
        if (!target.closest(".search-form")) {
        form.classList.remove("form__active");
          form.querySelector("input").value = "";
          document.querySelector(".header-btn__open").classList.remove("active")
        }
      })

      document.querySelector(".close-button").addEventListener("click", function() {
        let form = document.querySelector(".form");
        form.classList.remove("form__active");
          form.querySelector("input").value = "";
          document.querySelector(".header-btn__open").addEventListener("click", function() {
            document.querySelector("close-button").classList.remove("header-btn__open");
          })
      })


