json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.partial! '/api/questions/question', question: question
      json.answerIds do
        json.array! question.answers, :id
      end
    end
  end
end

json.answers do
  @answers.each do |answer|
    json.set! answer.id do
      json.extract! answer, :id, :body, :author_id, :question_id, :created_at
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username
    end
  end
end
