
  @topics.each do |topic|
    json.set! topic.id do
      json.partial! '/api/topics/topic', topic: topic
      json.questionIds do
        json.array! topic.questions, :id
      end
    end
  end
