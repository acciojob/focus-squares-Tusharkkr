//your JS code here. If required.
let sq1 = document.querySelector('#square1')
        let sq2 = document.querySelector('#square2')
        let sq3 = document.querySelector('#square3')

        sq1.addEventListener("mouseenter", () => {
            sq2.style.backgroundColor='#6F4E37'
            sq3.style.backgroundColor='#6F4E37'
        });
        sq1.addEventListener('mouseleave',()=>{
            sq2.style.backgroundColor='#E6E6FA'
            sq3.style.backgroundColor='#E6E6FA'
        });


        sq2.addEventListener("mouseenter", () => {
            sq1.style.backgroundColor='#6F4E37'
            sq3.style.backgroundColor='#6F4E37'
        });
        sq2.addEventListener('mouseleave',()=>{
            sq1.style.backgroundColor='#E6E6FA'
            sq3.style.backgroundColor='#E6E6FA'
        });


        sq3.addEventListener("mouseenter", () => {
            sq2.style.backgroundColor='#6F4E37'
            sq1.style.backgroundColor='#6F4E37'
        });
        sq3.addEventListener('mouseleave',()=>{
            sq2.style.backgroundColor='#E6E6FA'
            sq1.style.backgroundColor='#E6E6FA'
        });