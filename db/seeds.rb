# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

goals = Goal.create([{ title: "Buy New Bike" , total: 900, category: "miscellaneous", }, { title: "Add to Savings" , total: 150, category: "savings"  }, { title: "Pay off Credit Card" , total: 970, category: "credit"  }])
budget = Budget.create([{ income: 6500, housing_cost: 900 , food: 300 , credit_cards: 300 , personal_loan: 350 , car_loan: 129.50 , savings: 50 , miscellaneous: 275.76 }])
