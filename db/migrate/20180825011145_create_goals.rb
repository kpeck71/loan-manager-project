class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.text :title
      t.float :total
      t.float :amount_paid, :default => 0
      t.float :amount_left
      t.boolean :paid, :default => false
      t.text :category
    end
  end
end
