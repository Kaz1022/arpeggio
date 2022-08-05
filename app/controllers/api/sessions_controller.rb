class Api::SessionsController < ApplicationController
#   skip_before_action :authenticate_user, only: [:create]
    
    # include CurrentUserConcern

    def create
        user = User.find_by_email(user_params[:email])
        if user && user.authenticate(user_params[:password])
            @image = rails_blob_path(user.image)
            session[:user_id] = user.id
            render json: {
                status: :created,
                logged_in: true,  
                user: user,
                image: @image
        }
        else
            render json: { status: 401, errors: ['Please try again!'] }
        end
    end

    def logged_in
        @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
        if @current_user
            @image = rails_blob_path(@current_user.image)
            render json: {
                logged_in: true,
                user: @current_user,
                image: @image
            }
        else
            render json: {
                logged_in: false
            }
        end
    end

    def logout
        reset_session
        render json: { status: 200, logged_out: true }
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end
end