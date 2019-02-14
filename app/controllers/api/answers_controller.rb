class Api::AnswersController < ApplicationController
  before_action :ensure_logged_in

  def index
    question_id = params[:questionId]
    @answers = Answer.where(question_id: question_id).includes(:question)
    @users = User.all
    render :index
  end

  def show
    @answer = Answer.find(params[:id])
    render :show
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.author_id = current_user.id
    @answer.question_id = params[:answer][:questionId]
    @answer.topic_id = Question.find(@answer.question_id).topic_id
    @answer.upvotes = 0
    if @answer.save
      @answers = Answer.where(question_id: @answer.question_id)
      @users = []
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def update
    @answer = Answer.find(params[:id])
    @answer.voters = params[:answer][:voters] || []
    @answer.downvoters = params[:answer][:downvoters] || []
    if @answer.update(answer_params)
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private

  def answer_params
    params.require(:answer).permit(:body, :upvotes, images: [])
  end

end
