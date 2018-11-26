json.comments do
  @comments.each do |comment|
    json.set! answer.id do
      json.partial! '/api/comments/comment', comment:comment
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
