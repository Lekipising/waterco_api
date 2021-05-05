import express from "express";
import {captureBill,viewBill, viewAllBills } from '../controllers/billsController.js'

const billsRouter = express.Router();

//Capture a bill /
billsRouter.post("/", captureBill);

//View all members bills/
billsRouter.get("/", viewAllBills);

//View a bills/:id
billsRouter.get("/:id", viewBill);

export default billsRouter;