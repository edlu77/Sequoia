class Api::QuestionsController < ApplicationController
  before_action :ensure_logged_in

  def index
    @questions = Question.all.includes(:answers)
    @answers = Answer.all || []
    @users = User.all || []
    render :index
  end

  def create
    @question = Question.new(question_params)
    @question.author_id = current_user.id
    @question.topic_id = params[:question][:topic_id] == "" ?
      1 : params[:question][:topic_id]
    if @question.save
      @questions = Question.all
      @answers = []
      @users = []
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
    if @question.destroy
      @questions = Question.all
      render :index
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  private

  def question_params
    params.require(:question).permit(:title, :author_id)
  end

end
