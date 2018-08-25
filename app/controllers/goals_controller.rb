class Api::V1::GoalsController < ApplicationController
  def index
    render json: Goal.all
  end

  def create
    goal = Goal.create(goal_params)
    render json: goal
  end

  def destroy
    Goal.destroy(params[:id])
  end

  def update
    goal = Goal.find(params[:id])
    goal.update_attributes(goal_params)
    render json: goal
  end

  private

  def goal_params
    params.require(:goal).permid(:id, :title, :amount, :paid, :category)
  end
  
end
