class Api::QuestionsController < ApplicationController
  before_action :require_logged_in

  def index
    @questions = Question.all
    render :index
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    @question = Question.find(params[:id])
    render :show
  end

  def update
    @question = Question.find(params[:id])
    if @question.update(question_params)
      render :show
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
    render :index
  end

  private

  def question_params
    params.require(:question).permit(:title)
  end

end
