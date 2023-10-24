import express, { Request, Response } from "express";
import restaurants from "./config.json";

const app = express();
const port = 8080;
app.use(express.json());

app.get("/detail/:id", (req: Request, res: Response) => {
  const restaurantId = parseInt(req.params.id);

  // Find the restaurant with the matching ID
  const restaurant = restaurants.find((r) => r.restaurant_id === restaurantId);

  if (!restaurant) {
    return res.status(404).json({ error: "Restaurant not found" });
  }

  // Send the restaurant details as JSON response
  res.json(restaurant);
});

app.get("/", (req: Request, res: Response) => {
  res.json("Hello From vercel");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
