import { Router } from "express";

import { ImportRouter } from "./ProductsRoutes";


const routes = Router();

routes.use('/users', ImportRouter)


export default routes;