
    let squares = document.querySelectorAll('.square');

    for (let i = 0; i < squares.length; i++) {

        squares[i].addEventListener("mouseenter", () => {
            for (let j = 0; j < squares.length; j++) {
                if (i !== j) {
                    squares[j].style.backgroundColor = '#6F4E37';
                }
            }
        });

        squares[i].addEventListener("mouseleave", () => {
            for (let j = 0; j < squares.length; j++) {
                squares[j].style.backgroundColor = '#E6E6FA';
            }
        });
    }

