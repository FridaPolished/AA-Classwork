class SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password])
            if @user
                login_user(@user)
                redirect_to user_url(@user)
            elsif @user.nil?
                debugger
            flash.now[:errors] = ["Incorrect password and/or email"]
            render :new

            end
    end

    def destroy
        logout_user
        redirect_to new_session_url
    end

    def new
        :new
    end

end
