class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.text :title
      t.float :amount
      t.boolean :paid, default => false
      t.text :category
    end
  end
end
