class Goal < ActiveRecord::Base
  def self.amount_left
    this.amount_left = this.total - this.amount_paid
  end
end
