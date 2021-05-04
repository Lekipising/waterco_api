import Payments from "../models/payment.js";
import Bills from "../models/billing.js";


//Add a payment
export async function capturePayment(req, res) {
    try {
        // let payment = await Payments.create(req.body);
        let bill = await Bills.findAll({where: {billid: req.body.billid}});
        let toPay = bill[0].Amount;
        let toPremise = bill[0].PremiseId;
        if (toPay < req.body.PaidAmount){
            console.log("Paid less");
        }
        let paymentObj = {
                billid: req.body.billid,
                ExpectedAmount: toPay,
                PaidAmount: req.body.PaidAmount,
                PremiseId: toPremise
            }
        let payment = await Payments.create(paymentObj);
        if (payment) {
            res.status(200).json({
                success: true,
                message: 'Payment created successfully',
                data: payment
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Payment could not be created at this time'
            })
        }
        // find premise
        // find biller
        // get bill amount
        // enter amount
        // calc arrears
        // create payment

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a payment
export async function viewPayment(req, res) {
    try {
        let onepayment = await Payments.findAll({where: {TransactionID: req.params.id}});
        if (onepayment) {
            res.json({
                success: true,
                message: 'Payment records retrieved successfully',
                data: onepayment
            })
        } else {
            res.json({
                success: true,
                message: 'No payment records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View all Payments
export async function viewAllPayments(req, res) {
    try {
        let allPayments = await Payments.findAll();
        if (allPayments) {
            res.json({
                success: true,
                message: 'Payment records retrieved successfully',
                data: allPayments
            })
        } else {
            res.json({
                success: true,
                message: 'No payment records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View Premise Payments
export async function viewPaymentsByPremise(req, res) {
    try {
        let onepayment = await Payments.findAll({where: {PremiseId: req.params.id}});
        if (onepayment) {
            res.json({
                success: true,
                message: 'Payment records retrieved successfully',
                data: onepayment
            })
        } else {
            res.json({
                success: true,
                message: 'No payment records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}