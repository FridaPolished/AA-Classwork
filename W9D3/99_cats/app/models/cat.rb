class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

  COLORS = %w(tuxedo tabby orange white black)
  validates :color, inclusion: { in: COLORS }
  validates :sex, inclusion: { in: ["M", "F"]}



  def age
    # b_year = :birth_date.year
    # cur_date = Date.today.year
    # cur_date - b_year
    time_ago_in_words(birth_date)
  end
  
end