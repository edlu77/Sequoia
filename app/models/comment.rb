class Comment < ApplicationRecord
  validates :body, :author_id, :parent_id, presence: true

  belongs_to :parent,
  foreign_key: :parent_id,
  primary_key: :id,
  class_name: :Answer

end
