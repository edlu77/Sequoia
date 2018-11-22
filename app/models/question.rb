class Question < ApplicationRecord
  validates :title, :author_id, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  primary_key: :id,
  class_name: :User

  has_many :answers,
  foreign_key: :question_id,
  primary_key: :id,
  class_name: :Answer

  has_many :comments,
  foreign_key: :parent_id,
  primary_key: :id,
  class_name: :Comment

end
