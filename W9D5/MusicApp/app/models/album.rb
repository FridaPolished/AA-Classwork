# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  band_id    :integer          not null
#  title      :string           not null
#  year       :string           not null
#  live       :boolean          default(FALSE)
#  studio     :boolean          default(TRUE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class Album < ApplicationRecord

    validates :title, :year, presence: true

    belongs_to :band_id


end
