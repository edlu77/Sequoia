class ChangeAnswers < ActiveRecord::Migration[5.2]
  def change
    add_column :answers, :upvotes, :integer
  end
end
