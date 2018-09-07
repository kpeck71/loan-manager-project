class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.text :name
      t.float :amount
      t.text :category
    end
  end
end
