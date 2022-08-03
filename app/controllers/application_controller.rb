class ApplicationController < ActionController::API
  
  include ActionController::Cookies
#   before_action :authenticate_user
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
        
    private

    def login!
        session[:user_id] = @user.id
    end
  
    def current_user
        @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end

end
