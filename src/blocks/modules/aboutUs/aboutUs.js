
'use strict';

if(document.querySelector('.counter')) {

    var number = document.querySelector('.counter'),
    numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {

    if (window.pageYOffset > numberTop - window.innerHeight / 1) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function () {




            const counters = document.querySelectorAll('.counter');

            const counters2 = document.querySelectorAll('.counter2');


            const speed = 200; // The lower the slower

            const speed2 = 140; // The lower the slower

            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    // Lower inc to slow and higher to slow
                    const inc = Math.round(target / speed);


                    // Check if target is reached
                    if (count < target) {
                        // Add inc to count and output in counter
                        counter.innerText = count + inc



                        // Call function every ms
                        setTimeout(updateCount, 1);


                    } else {
                        counter.innerText = target;
                    }
                };


                setTimeout(updateCount, 1000);
            });



            counters2.forEach(counter2 => {
                const updateCount2 = () => {
                    const target2 = +counter2.getAttribute('data-target-sec');
                    const count2 = +counter2.innerText;

                    // Lower inc to slow and higher to slow
                    const inc2 = Math.round(target2 / speed2);


                    // Check if target is reached
                    if (count2 < target2) {
                        // Add inc to count and output in counter
                        counter2.innerText = count2 + inc2



                        // Call function every ms
                        setTimeout(updateCount2, 1);


                    } else {
                        counter2.innerText = target2;
                    }
                };

                setTimeout(updateCount2, 1200);
            });





            if (start == end) {
                clearInterval(interval);
            }
        }, 5);
    }
});



}
