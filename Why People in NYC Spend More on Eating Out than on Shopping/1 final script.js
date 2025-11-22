document.addEventListener("DOMContentLoaded", () => {
  /* 1. Income vs Spending -------------------------------- */
  const incomeCanvas = document.getElementById("incomeChart");
  if (incomeCanvas) {
    const ctx = incomeCanvas.getContext("2d");

    // Example yearly spending (USD) per household by income group (simplified)
    const incomeGroups = ["Low income", "Middle income", "High income"];
    const eatingOut = [1800, 3200, 5200]; // restaurants + takeout
    const shopping = [2200, 3000, 3800];  // products

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: incomeGroups,
        datasets: [
          {
            label: "Eating out ($/year)",
            data: eatingOut,
            borderWidth: 1.5,
          },
          {
            label: "Shopping for products ($/year)",
            data: shopping,
            borderWidth: 1.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Estimated yearly spending (USD)",
            },
            ticks: {
              stepSize: 1000,
            },
          },
          x: {
            title: {
              display: false,
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Eating Out vs Shopping by Income Group (Illustrative)",
          },
          legend: {
            position: "bottom",
          },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const value = ctx.parsed.y;
                return `${ctx.dataset.label}: $${value.toLocaleString()}`;
              },
            },
          },
        },
      },
    });
  }

  /* 2. Restaurant Density vs Eating Out ------------------ */
  const densityCanvas = document.getElementById("densityChart");
  if (densityCanvas) {
    const ctx2 = densityCanvas.getContext("2d");

    // Approximate patterns (restaurants per 10k residents and index)
    const cityData = [
      { city: "New York City", density: 19.3, index: 120 },
      { city: "San Francisco", density: 23.0, index: 125 },
      { city: "Chicago", density: 17.5, index: 108 },
      { city: "Houston", density: 14.0, index: 96 },
      { city: "Miami", density: 18.5, index: 115 },
    ];

    new Chart(ctx2, {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "City",
            data: cityData.map((c) => ({ x: c.density, y: c.index })),
            pointRadius: 6,
            borderWidth: 1.3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        parsing: false,
        scales: {
          x: {
            title: {
              display: true,
              text: "Restaurants per 10,000 residents",
            },
            suggestedMin: 12,
            suggestedMax: 24,
          },
          y: {
            title: {
              display: true,
              text: "Eating-out spending index (U.S. = 100)",
            },
            suggestedMin: 90,
            suggestedMax: 130,
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Restaurant Density vs Eating-Out Spending (Illustrative Relationship)",
          },
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const city = cityData[ctx.dataIndex];
                return `${city.city}: ${city.density.toFixed(
                  1
                )} restaurants / 10k, index ${city.index}`;
              },
            },
          },
        },
      },
    });
  }

  /* 3. Apartment Sizes ----------------------------------- */
  const spaceCanvas = document.getElementById("spaceChart");
  if (spaceCanvas) {
    const ctx3 = spaceCanvas.getContext("2d");

    // Rounded average apartment sizes (sq ft), based on patterns in housing reports
    const cities = ["U.S. average", "New York City", "Los Angeles", "Miami", "Dallas"];
    const sizes = [908, 720, 820, 880, 950];

    new Chart(ctx3, {
      type: "bar",
      data: {
        labels: cities,
        datasets: [
          {
            label: "Average apartment size (sq ft)",
            data: sizes,
            borderWidth: 1.5,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Square feet",
            },
          },
          y: {
            title: {
              display: false,
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Average Apartment Size: NYC vs Other Cities (Rounded Averages)",
          },
          legend: {
            position: "bottom",
          },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const value = ctx.parsed.x;
                return `${ctx.dataset.label}: ${value.toLocaleString()} sq ft`;
              },
            },
          },
        },
      },
    });
  }
});







