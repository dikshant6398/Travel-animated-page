document.addEventListener("DOMContentLoaded", function() {
    const allBtn = document.querySelectorAll('.gal-head button');
    const cardval = document.querySelectorAll('.gal-data .cardval');

    // Hide all cardval elements except the first one
    for (let i = 1; i < cardval.length; i++) {
        cardval[i].classList.add('hide');
    }

    allBtn.forEach((btn, index) => btn.addEventListener("click", function(e) {
        // Remove 'active' class from all buttons
        allBtn.forEach(button => button.classList.remove('active'));
        // Add 'active' class to the clicked button
        this.classList.add('active');

        // Hide all cardval elements
        cardval.forEach(card => card.classList.add('hide'));

        // Show the corresponding cardval element
        cardval[index].classList.remove('hide');
    }));
});
