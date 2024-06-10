const foodItems = [
    {
      name: "Pizza",
      image: "pizza.jpg",
      rating: 4.7,
      description: "A delicious cheese and tomato pizza."
    },
    {
      name: "Burger",
      image: "burger.jpg",
      rating: 4.5,
      description: "A juicy beef burger with lettuce and tomato."
    },
    {
      name: "Sushi",
      image: "sushi.jpg",
      rating: 4.8,
      description: "Fresh and tasty sushi rolls."
    },
    {
      name: "Pasta",
      image: "pasta.jpg",
      rating: 4.3,
      description: "Italian pasta with a rich tomato sauce."
    },
    {
        name: "French Fires",
        image: "ff.jpg",
        rating: 4.3,
        description: "Fully Loaded fresh french fries."
      },
      {
        name: "Capachino",
        image: "capachino.jpg",
        rating: 4.6,
        description: "Freshly hand made Capachino."
      },
      {
        name: "Milk Shake",
        image: "ms.jpg",
        rating: 4.3,
        description: "Very delicious strawberry milkshake"
      },
      {
        name: "Sandwich",
        image: "sandwhich.jpg",
        rating: 4.3,
        description: "Very healthy and freshly made sandwhich."
      }
    // Add more food items as needed
  ];
  
  const main = document.getElementById("main");
  const form = document.getElementById("form");
  const search = document.getElementById("search");
  
  const getClassByRate = (rate) => {
    if (rate >= 4.5) return "green";
    else if (rate >= 3.5) return "orange";
    else return "red";
  };
  
  const showFoodItems = (items) => {
    main.innerHTML = "";
    items.forEach((item) => {
      const { name, image, rating, description } = item;
      const foodElement = document.createElement("div");
      foodElement.classList.add("food-item");
      foodElement.innerHTML = `
        <img
          src="images/${image}"
          alt="${name}"
        />
        <div class="food-info">
          <h3>${name}</h3>
          <span class="${getClassByRate(rating)}">${rating}</span>
        </div>
        <div class="overview">
          <h3>Description</h3>
          ${description}
        </div>
      `;
      main.appendChild(foodElement);
    });
  };
  
  // Initially display all food items
  showFoodItems(foodItems);
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value.toLowerCase();
    const filteredItems = foodItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    showFoodItems(filteredItems);
    search.value = "";
  });
  