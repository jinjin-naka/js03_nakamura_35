const def = [36,63,106,107,138,155,338,442,394,406,403,317,488,389,609,820,848,1083,986,1408,1385,1264,1584,1911,2568,2642,3063,2260,5079,5846,5729]

const ctx = document.querySelector("#myChart").getContext("2d")
const labels = [
    1,2,3,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,31
];
const data = {
    labels,
    datasets: [{
        data: def,
        label: "資産運用結果"
    }]
};

const config = {
    type: "line",
    data: data,
    options: {
        responsive: true,
    }
};

const myChart = new Chart(ctx, config)

