class UsersController < ApplicationController

    def index
        # render plain: "I'm in the index action!"
        
        if params[:username]
            user = User.find_by(username: params[:username])
            render json: user 
        else
            users = User.all
            render json: users
        end
    end

    def create
        # render json: params
        user = User.new(user_params)
        if user.save
           render json: user
        else
            render json: user.errors.full_messages, status: 422
        end 
    end
    
    def show
        # render json: params
        user = User.find(params[:id])
        render json: user
    end
    
    
    def update
        user = User.find(params[:id])
        if user.update(user_params)
            render json: user
        else
            render json: user.errors.full_messages, status: 422
        end        
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    
    end 
       
    private

    def user_params
        params.require(:user).permit(:name, :email)
    end

end