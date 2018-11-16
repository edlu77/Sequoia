class Question < ApplicationRecord
  validates :title, :author_id, :topic, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  primary_key: :id,
  class_name: :User

end
