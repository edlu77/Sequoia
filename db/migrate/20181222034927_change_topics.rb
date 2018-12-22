class ChangeTopics < ActiveRecord::Migration[5.2]
  def change
    add_column :answers, :topic_id, :integer
  end
end
