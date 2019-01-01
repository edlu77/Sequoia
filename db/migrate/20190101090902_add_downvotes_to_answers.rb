class AddDownvotesToAnswers < ActiveRecord::Migration[5.2]
  def change
    add_column :answers, :downvoters, :text, array: true, default: []
  end
end
