class Api::SessionsController < ApplicationController
  skip_before_action :authenticate_user, only: [:create]
  
  def login
    @user = User.find_by(email: session_params[:email])

    if @user && @user.authenticate(session_params[:password])
        login!
        render json: { logged_in: true, user: @user }
    else
        render json: { status: 401, errors: ['Invalid Credentials. Try again!'] }
    end
end

def logout
    reset_session
    render json: { status: 200, logged_out: true }
end

def logged_in?
    if @current_user
        render json: { logged_in: true, user: current_user }
    else
        render json: { logged_in: false, message: 'Cannot find the user.' }
    end
end

private

    def session_params
        params.require(:user).permit(:username, :email, :password)
    end

end

