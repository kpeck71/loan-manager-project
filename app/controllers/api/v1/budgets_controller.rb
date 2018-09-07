class Api::V1::BudgetsController < ApplicationController
  def index
    render json: Budget.all
  end

  def create
    budget = Budget.new(budget_params)
    if budget.save
      render json: budget
    else
      render json: { message: budget.errors }, status: 400
    end
  end

  def destroy
    Budget.destroy(params[:id])
  end

  def update
    budget = Budget.find(params[:id])
    if budget.update(budget_params)
      render json: budget
    else
      render json: { message: budget.errors }, status: 400
    end
  end

  private

  def budget_params
    params.require(:budget).permit(:income)
  end

end
