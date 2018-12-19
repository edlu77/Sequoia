class Topic < ApplicationRecord
  validates :name, presence: true

  has_many :questions,
  foreign_key: :topic_id,
  primary_key: :id,
  class_name: :Question

  has_many :answers,
  through: :questions,
  source: :answers

end
