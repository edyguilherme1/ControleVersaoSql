import { Router } from "express";

import { ImportRouter } from "./importRoutes";


const routes = Router();

routes.use('/users', ImportRouter)


export default routes;