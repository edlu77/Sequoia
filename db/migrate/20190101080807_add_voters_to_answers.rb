class AddVotersToAnswers < ActiveRecord::Migration[5.2]
  def change
    add_column :answers, :voters, :text, array: true, default: []
  end
end
