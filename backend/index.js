import express from "express";

const app = express();
const PORT = 3005;

app.get("/", (req, res) => {
  res.send("Restauraunt db");
});

app.get("/api/menu", (req, res) => {
  const menuData = {
    menu: [
      {
        id: 101,
        name: "Burger",
        price: 8.99,
        category: "Main Course",
        description:
          "A classic beef patty served in a soft bun, topped with fresh lettuce, juicy tomato slices, melted cheese, and a touch of tangy ketchup. Allergens: Dairy (cheese).",
        imgUrl: "../imgs/burger.png",
      },
      {
        id: 102,
        name: "Salad",
        price: 4.49,
        category: "Appetizer",
        description:
          "A refreshing medley of crisp lettuce, colorful vegetables, and a zesty vinaigrette dressing. Topped with croutons for added crunch. Allergens: Gluten (croutons).",
        imgUrl: "../imgs/salad.png",
      },
      {
        id: 103,
        name: "Ice Cream",
        price: 2.49,
        category: "Dessert",
        description:
          "Creamy and indulgent, our ice cream is a delightful treat made with rich dairy, churned to perfection. Available in various flavors to satisfy your cravings. Allergens: Dairy.",
        imgUrl: "../imgs/iceCream.png",
      },
      {
        id: 104,
        name: "Steak",
        price: 14.99,
        category: "Main Course",
        description:
          "A succulent cut of perfectly grilled steak, seasoned to perfection and served with your choice of sides. Allergens: None.",
        imgUrl: "../imgs/steak.png",
      },
      {
        id: 105,
        name: "Mozzarella Sticks",
        price: 3.99,
        category: "Appetizer",
        description:
          "Crispy and cheesy mozzarella sticks, served with a tangy marinara sauce for dipping. Allergens: Dairy.",
        imgUrl: "../imgs/mozzarellaSticks.png",
      },
      {
        id: 106,
        name: "Cheesecake",
        price: 2.99,
        category: "Dessert",
        description:
          "Indulge in our velvety smooth cheesecake, topped with a drizzle of fruit sauce. Allergens: Dairy, Gluten (crust).",
        imgUrl: "../imgs/cheeseCake.png",
      },
    ],
  };

  res.json(menuData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
