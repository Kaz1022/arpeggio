class Api::UsersController < ApplicationController
  # skip_before_action :authenticate_user

   # GET /users
   def index
    @users = User.all
    render json: @users
   end

   
   def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    
    if @user.save
      session[:user_id] = @user.id
      render json: {
        status: :created,
        logged_in: true,  
        user: @user
      }
    else
      render :new
    end
    
  end

  def show
    @user = User.includes(:user_instruments).find(params[:id])
    @instruments = Instrument.includes(:user_instruments)
    .find_by(user_instruments: { user_id: params[:id] }).user_instruments
    @image = rails_blob_path(@user.image)

    render json: {
      user: @user,
      instruments: @instruments,
      image: @image
    }
  end

  # def show
  #   @user = User.find(params[:id])
  #   @image = rails_blob_path(@user.image)

  #   render json: {
  #     user: @user.to_json(include: [:instruments]),
  #     image: @image
  #   }
  # end

  def instruments
    @instruments = Instrument.includes(:user_instruments)
    .find_by(user_instruments: { user_id: params[:id] })

    render json: @instruments
  end

  def update
    @user = User.find(params[:id])
    @user.update(image: params[:image])
    @image = rails_blob_path(@user.image)
    render json: {
      user: @user,
      image: @image
    }
end
  

  private

   def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :handle,
      :email,
      :password,
      :password_confirmation,
      :image,
      :city,
      :country,
      :phone
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
