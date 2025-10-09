const packages = [
  { name: "Goa Beach Tour", price: "₹9,999", image: "https://via.placeholder.com/200x150" },
  { name: "Kashmir Snow Escape", price: "₹14,500", image: "https://via.placeholder.com/200x150" },
  { name: "Rajasthan Desert Safari", price: "₹12,000", image: "https://via.placeholder.com/200x150" },
];

const packageList = document.getElementById("package-list");

if (packageList) {
  packages.forEach(pkg => {
    const card = document.createElement("div");
    card.className = "col-md-4 my-3";
    card.innerHTML = `
      <div class="card">
        <img src="${pkg.image}" class="card-img-top" alt="${pkg.name}">
        <div class="card-body">
          <h5 class="card-title">${pkg.name}</h5>
          <p class="card-text">${pkg.price}</p>
          <button class="btn btn-primary book-btn">Book Now</button>
        </div>
      </div>
    `;
    card.querySelector(".book-btn").addEventListener("click", () => {
      localStorage.setItem('selectedPackage', pkg.name);
      window.location.href = "booking.html";
    });
    packageList.appendChild(card);
  });
}
