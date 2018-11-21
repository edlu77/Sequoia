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
