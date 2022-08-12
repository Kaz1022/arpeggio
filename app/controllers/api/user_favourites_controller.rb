class Api::UserFavouritesController < ApplicationController

  #POST /api/user_favourites
  def create
    @event = Event.find(favourite_params[:event_id])
    @user_favourite = UserFavourite.find_by(user_id: favourite_params[:user_id], event_id: @event.id)
    #You can register favorites other than your own posts
    
    if @event.user_id != favourite_params[:user_id] && !@user_favourite   
      @user_favourite = UserFavourite.create(user_id: favourite_params[:user_id], event_id: @event.id)
    end
  end

#  GET api/user_favourites/:event_id
  def show
    @event = Event.find(params[:id])
    @user_favourite = UserFavourite.find_by(user_id: params[:user_id], event_id: @event.id)

    if @user_favourite 
      render json: { like: true } 
    else
      render json: { like: false }
    end

  end

  def destroy
    @event = Event.find(favourite_params[:event_id])
    @user_favourite = UserFavourite.find_by(user_id: favourite_params[:user_id], event_id: @event.id)
    @user_favourite.destroy
    render json: @user_favourite
  end

  private

  def favourite_params
   params.require(:myfavourite).permit(
     :event_id,
     :user_id
   )
  end
   
end
