class UserTopics < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :followed_topics, :text, array: true, default: []
  end
end
