class PostsController < ApplicationController

    before_action :require_sign_in, except: [:show]

    def new
        @post = Post.new
        render :new
    end

    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        
        # debugger
        if @post.save
            redirect_to post_url(@post)
        else
            flash[:errors] = @post.errors.full_messages
            render :new
        end
    end

    def show
        @post = Post.find(params[:id])
        render :show
    end

    private
    def post_params
        params.require(:post).permit(:title, :url, :content, sub_ids: [])
    end


end
