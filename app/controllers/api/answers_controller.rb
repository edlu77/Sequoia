class AnswersController < ApplicationController
  before_action :ensure_logged_in

  def index
    @answers = Answer.find_by_question_id(params[:question_id])
    render :index
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.author_id = current_user.id
    @answer.question_id = params[:question_id]
    if @answer.save
      @answers = Answer.find_by_question_id(params[:question_id])
      render :index
    else
      render :json @answer.errors.full_messages, status: 422
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
