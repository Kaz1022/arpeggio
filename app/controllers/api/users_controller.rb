class Api::UsersController < ApplicationController
  
    def create
        new_user = User.new(user_params)
        if new_user.save
          token = JsonWebToken.encode(user_id: new_user.id)
          time = Time.now + 24.hours.to_i
          render json: { token: token, time: time }, status: :ok
        else
          head(:unprocessable_entity)
        end
      end
    
      private
    
      def user_params
        params.require(:user).permit(
          :username,
          :email,
          :country,
          :password,
          :picture
        )
      end
  end
  



# class Api::UsersController < ApplicationController
#   skip_before_action :authenticate_user

#   def show
#       if current_user
#           render json: current_user, status: :ok
#       else
#           render json: "Not authenticated", status: :unauthorized
#       end
#   end

#   def create
#       user = User.create(user_params)
#       if user.valid?
#           session[:user_id] = user.id
#           render json: user, status: :created
#       else
#           render json: user.errors.full_messages, status: :unprocessable_entity
#       end
#   end

#   private

#   def user_params
#       params.permit(:username, :email, :password, :password_confirmation)
#   end
# end
