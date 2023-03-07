var cases = document.querySelectorAll('.case');

var tour = "x";

cases.forEach(function(case_) {
    case_.addEventListener('click', function() {
        if (case_.textContent === "") {
            case_.textContent = tour;
            case_.classList.add(tour);
            tour = (tour === "x") ? "o" : "x";
        }
    });
});