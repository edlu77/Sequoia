class Api::TopicsController < ApplicationController

  def index
    @topics = Topic.all
    render :index
  end

  def show
    @topic = Topic.find(params[:id])
    @questions = @topic.questions
    @answers = @topic.answers
    render :show
  end

end
