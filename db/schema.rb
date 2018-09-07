# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_09_07_131418) do

  create_table "budgets", force: :cascade do |t|
    t.float "income"
  end

  create_table "expenses", force: :cascade do |t|
    t.text "name"
    t.float "amount"
    t.text "category"
  end

  create_table "goals", force: :cascade do |t|
    t.text "title"
    t.float "total"
    t.float "amount_paid", default: 0.0
    t.float "amount_left"
    t.boolean "paid", default: false
    t.text "category"
  end

end
