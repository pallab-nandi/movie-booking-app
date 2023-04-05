const { paymentService } = require('../services/payment.service');
const errorHandler = require('../utils/errorHandler');

async function getAllPayment(req, res) {
  const userId = req._id;

  let queryObj = {};
  if (queryObj) queryObj = req.queryObj;

  return await paymentService
    .getAllPayment(userId, queryObj)
    .then((data) => {
      console.log(data);
      if (!data || data.length === 0) {
        res.status(400).send(JSON.stringify({
          status: 'fail',
          message: 'No payment data available'
        }))
      } else {
        res.status(200).send(JSON.stringify({
          status: 'success',
          message: 'All Payment data fetched successfully',
          data: data
        }))
      }
    })
    .catch(err => errorHandler.serverError(err));
}

async function getPaymentsById(req, res) {
  const id = req.params.id;

  return await paymentService
    .getPaymentById(id)
    .then((data) => {
      console.log(data);
      if (!data || data.length === 0) {
        res.status(400).send(JSON.stringify({
          status: 'fail',
          message: `Such payment data doesn't exist`
        }))
      } else {
        res.status(200).send(JSON.stringify({
          status: 'success',
          message: 'Payment data fetched successfully',
          data: data
        }))
      }
    })
    .catch(err => errorHandler.serverError(err));
}

async function createPayment(req, res) {
  const paymentBody = req.body;

  return await paymentService
    .createPayment(paymentBody)
    .then((data) => {
      res.status(data.statusCode).send(JSON.stringify({
        status: data.status,
        message: data.message,
        data: data.payment
      }))
    })
    .catch(err => errorHandler.serverError(err));
}

module.exports = {
  getAllPayment,
  getPaymentsById,
  createPayment
}