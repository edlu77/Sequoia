json.topics do
  json.partial! '/api/topics/topic', topic: @topic
end

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
      json.partial! '/api/answers/answer', answer: answer
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
