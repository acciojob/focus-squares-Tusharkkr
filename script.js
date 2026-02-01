
    let squares = document.querySelectorAll('.square');

    for (let i = 0; i < squares.length; i++) {

        squares[i].addEventListener("mouseenter", () => {
            for (let j = 0; j < squares.length; j++) {
                if (i! == j) {
                    squares[j].style.backgroundColor = 'rgb(111, 78, 55)';
                }
            }
        });

        squares[i].addEventListener("mouseleave", () => {
            for (let j = 0; j < squares.length; j++) {
                squares[j].style.backgroundColor = 'rgb(230, 230, 250)';
            }
        });
    }

