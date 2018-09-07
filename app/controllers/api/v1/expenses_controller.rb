class Api::V1::ExpensesController < ApplicationController
  def index
    render json: Expense.all
  end

  def create
    expense = Expense.new(expense_params)
    if expense.save
      render json: expense
    else
      render json: { message: expense.errors }, status: 400
    end
  end

  def destroy
    Expense.destroy(params[:id])
  end

  def update
    expense = Expense.find(params[:id])
    if expense.update(expense_params)
      render json: expense
    else
      render json: { message: expense.errors }, status: 400
    end
  end

  private

  def expense_params
    params.require(:expense).permit(:id, :title, :amount, :category)
  end

end
