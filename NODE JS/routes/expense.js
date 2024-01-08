const express = require('express');
const expenseController = require('../controllers/expense');

const router = express.Router();

router.post('/add-expense', expenseController.addExpense);

router.get('/get-expense', expenseController.getExpenses);

router.get('/edit-expense/:id',expenseController.editExpense);

router.put('/update-expense/:id', expenseController.updateExpense);

router.delete('/delete-expense/:id', expenseController.deleteExpense);

module.exports = router;