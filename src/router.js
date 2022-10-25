import { Router } from "express";
import ProdutosController from "./Controllers/ProdutosController";

const routes = new Router();

//rotas principais

routes.post("/produtos", ProdutosController.store);
routes.get("/produtos", ProdutosController.index);

routes.get('/modelo', ProdutosController.index2)
routes.get('/tipo', ProdutosController.index3)

//mateus - category

export default routes;

//routes.get('/produtos', QueryesController.getallcolors)
