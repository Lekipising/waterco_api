import express from "express";
import {captureBill,viewBill } from '../controllers/billsController.js'

const billsRouter = express.Router();

//Capture a bill /
billsRouter.post("/", captureBill);

//View a bills/:id
billsRouter.get("/:id", viewBill);

export default billsRouter;