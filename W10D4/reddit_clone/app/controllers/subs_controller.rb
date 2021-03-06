class SubsController < ApplicationController
    before_action :require_sign_in, only: [:new, :create, :edit, :update]

    def new
        render :new
    end

    def create
        @sub = Sub.new(sub_params)
        @sub.moderator_id = current_user.id
        
        if @sub.save
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def show
        @sub = Sub.find(params[:id])
        render :show
    end

    def edit
        @sub = current_user.subs.find(params[:id])
        if @sub
            render :edit 
        else
            flash[:errors] = ["Only moderators can modify subs"]
            redirect_to sub_url(@sub)
        end
    end
    
    def update
        @sub = current_user.subs.find(params[:id])

        if @sub.update(sub_params)
            redirect_to sub_url(@sub)
        else
            flash[:errors] = ["Only moderators can modify subs"]
            redirect_to sub_url(@sub)
        end
    end

    def index
        @subs = Sub.all
        render :index
    end

    private 

    def sub_params
        params.require(:sub).permit(:title, :description, post_ids: [] )
    end
end
