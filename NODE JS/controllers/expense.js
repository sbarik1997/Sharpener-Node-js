const Expense = require('../models/expense');

exports.addExpense = (req,res,next) => {
    const amount = req.body.expenseAmount;
    const description = req.body.expenseDescription;
    const category = req.body.expenseCategory;

    Expense.create({amount: amount, description: description, category: category})
    .then(data => {
        res.json({expenseDetails: data});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: 'Internal server error'})
    })
};

exports.getExpenses = (req,res,next) => {
    Expense.findAll()
    .then(response => {
        res.json(response)
    })
    .catch(err => console.log(err))
};

exports.editExpense = (req,res,next) => {
    const editExpense = req.query.edit;
    if(editExpense){
        const expenseId = req.params.id;
        Expense.findAll({where: {id: expenseId}})
        .then(response => {
            res.json(response);
        })
        .catch(err => console.log(err))
    }
}

exports.updateExpense = (req,res,next) => {
    const expenseId = req.params.id;
    const updatedAmount = req.body.expenseAmount;
    const updatedDescription = req.body.expenseDescription;
    const updatedCategory = req.body.expenseCategory;

    Expense.findByPk(expenseId)
    .then(expense => {
        // console.log(expense);
        if(!expense){
            return res.status(404).json({error: "expense not found"});
        }

        // expense.id = +(expenseId);
        expense.amount = updatedAmount;
        expense.description = updatedDescription;
        expense.category = updatedCategory;

        return expense.save();
    })
    .then(updatedExpense => {
        console.log(updatedExpense);
        res.json({expenseDetails: updatedExpense});
    })
    .catch(err => console.log(err));
}

exports.deleteExpense = (req,res,next) => {
    const expenseId = req.params.id;
    Expense.destroy({where:{id: expenseId}})
    .then(() => {
        res.status(200)
    })
    .catch(err => console.log(err))
};