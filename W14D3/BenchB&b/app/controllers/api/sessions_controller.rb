class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username],
        params[:user][:password])
        if @user
            login(@user)
            render 'api/users/show'
        else
            render json: ['Invalid username/password combination'], status: 401
        end
    end

    def destroy
        if logout
            render json: {}
        else
            render json: ['Not logged in'], status: 404
        end
        #redirect somewhere in this action? redirect via component?
    end

end