class CreateBudgets < ActiveRecord::Migration[5.2]
  def change
    create_table :budgets do |t|
      t.float :income
      t.text :expense_name
      t.text :expense_amount
      t.text :expense_category
    end
  end
end
