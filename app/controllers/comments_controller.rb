class CommentsController < ApplicationController
  before_action :set_video
  before_action :authenticate_user!

  def create
    @comment = @video.comments.new(comment_params)
    @comment.user = current_user
    @comment.save

  end

  private
  def comment_params
    params.require(:comment).permit(:body, :video_id)
  end

  def set_video
    @video = Video.find(params[:video_id])
  end
end
