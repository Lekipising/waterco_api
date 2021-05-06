import express from "express";
import { addPremise, viewAllPremises, viewPremise, viewPremisesByMember, viewPremisesByRoute,updatePremise } from '../controllers/premisesController.js'

const premisesRouter = express.Router();

//Add a Premise
premisesRouter.post("/", addPremise);

//View a premise premises/:id
premisesRouter.get("/:id", viewPremise);

//View all premises premises/
premisesRouter.get("/", viewAllPremises);

//View premises by member premises/member/:id
premisesRouter.get("/member/:id", viewPremisesByMember);

//View premises by member premises/route/:id
premisesRouter.get("/route/:id", viewPremisesByRoute);

//Update a premise
premisesRouter.put("/:id", updatePremise);

export default premisesRouter;