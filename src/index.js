import express from "express";
import { join, __dirname } from "./utils/index.js";
import authRoutes from "./routes/auth.route.js"
import productRoutes from "./routes/product.route.js";
import cors from 'cors';
import{ envs } from "./config/envs.js"
import { authentication } from "./middlewares/auth.middleware.js";


//settings
const app = express();
app.set("PORT",envs.port || 5000);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cors());



//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use("/auth/login", authRoutes);
app.use("/api/products",authentication, productRoutes); //así se protegen todos los verbos
//si quisiera proteger sólo POST, por ej, se puede llamar al middleware en la ruta
//app.use("/api/products/:id", productRoutes   => esto está mal, va en ruote 

app.use((req,res,next)=>{
  res.status(404).send('Recurso no encontrado');
});

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
