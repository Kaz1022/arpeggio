class Api::SessionsController < ApplicationController
#   skip_before_action :authenticate_user, only: [:create]
  
  def new
    # not used since have front end login page
end

def create
    user = User.find_by_email(user_params[:email])
    # If the user exists AND the password entered is correct.
    if user && user.authenticate(user_params[:password])
      # Save the user id inside the browser cookie. This is how we keep the user 
      # logged in when they navigate around our website.
      session[:user_id] = user.id

      # rails cookie that can be accessed on every controller by:   cookies[:user]
      user ||= cookies[:user].present? ? JSON.parse(cookies[:user]) : {}

      # render json: session[:user_id]
      render json: {
          status: :created,
          logged_in: true,  
          user: user
        }
    else
      render json: { status: 401, errors: ['Please try again!'] }
    end
end

def destroy
    session[:user_id] = nil
    redirect_to '/login'
end

private
def user_params
  params.require(:user).permit(:email, :password)
end
end