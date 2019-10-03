class ApplicationController < ActionController::Base
    helper_method :current_user, :require_login

    def current_user
        @current_user ||=User.find_by_session_token(session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def logout
        if current_user
            current_user.reset_session_token
            session[:session_token] = nil
            return true
        else
            return false
        end
    end

    def login(user)
        @current_user = user
        session[:session_token] = @current_user.reset_session_token
    end
    #make login
end
