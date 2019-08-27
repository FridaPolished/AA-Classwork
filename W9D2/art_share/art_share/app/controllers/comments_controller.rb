class CommentsController < ApplicationController

    def index 
        if params[:user_id]
           render json: Comment.comments_for_user(params[:user_id])
        elsif params[:artwork_id]
            render json: Comment.comments_for_artwork(params[:artwork_id])
        else  
            render json: "Please search with an id", status: 422
        end
    end

    def create 
        comment = Comment.new(comment_params)
        if comment.save 
            render json: comment 
        else 
            render json: comment.errors.full_messages, status: 422
        end
    end

    def destroy 
        comment = Comment.find(params[:id])
        comment.destroy 
        render json: comment 
    end
    
    def like
        like = Like.new(likable_type: :Comment, likable_id: params[:id], user_id: params[:user_id])
    if like.save
    render json: like 
    else  
      render json: like.errors.full_messages, status: 422
    end 
    end

    private

    def comment_params
        params.require(:comment).permit(:user_id, :artwork_id, :body)
    end

end
