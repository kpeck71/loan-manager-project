class CreateBudget < ActiveRecord::Migration[5.2]
  def change
    create_table :budget do |t|
      t.float :income
      t.float :housing_cost, default => 0
      t.float :food, default => 0
      t.float :credit_cards, default => 0
      t.float :personal_loan, default => 0
      t.float :car_loan, default => 0
      t.float :savings, default => 0
      t.float :miscellaneous, default => 0
    end
  end
end
