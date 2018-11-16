class ChangeQuestions1 < ActiveRecord::Migration[5.2]
  def change
    remove_column :questions, :topic_id, :integer
    add_column :questions, :topic, :string
  end
end
