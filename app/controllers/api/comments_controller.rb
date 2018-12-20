class Api::CommentsController < ApplicationController
  before_action :ensure_logged_in

  def index
    @comments = Comment.where(parent_id: params[:parentId])
    # @users = User.all
    render :index
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    @comment.parent_id = params[:comment][:parentId]
    if @comment.save
      @comments = Comment.where(parent_id: @comment.parent_id)
      @users = []
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
