class ChangeQuestions2 < ActiveRecord::Migration[5.2]
  def change
    change_column_null :questions, :topic, true
  end
end
