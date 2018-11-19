class Api::AnswersController < ApplicationController
  before_action :ensure_logged_in

  def index
    question_id = params[:questionId]
    @answers = Answer.where(question_id: question_id)
    render :index
  end

  def show
    @answer = Answer.find(params[:id])
    render :show
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.author_id = current_user.id
    @answer.question_id = params[:answer][:question_id]
    if @answer.save
      @answers = Answer.where(question_id: @answer.question_id)
      render :index
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def answer_params
    params.require(:answer).permit(:body)
  end

end