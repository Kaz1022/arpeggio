class Api::UserFavouritesController < ApplicationController

  #POST /api/user_favourites
  def create
    @event = Event.find(favourite_params[:event_id])
    if @event.user_id != favourite_params[:user_id]   #You can register favorites other than your own posts
      @user_favourite = UserFavourite.create(user_id: favourite_params[:user_id], event_id: @event.id)
    end
  end

  def destroy
    @event = Event.find(favourite_params[:event_id])
    @user_favourite = UserFavourite.find_by(user_id: current_user.id, event_id: @event.id)
    @user_favourite.destroy
  end

  private

  def favourite_params
   params.require(:myfavourite).permit(
     :event_id,
     :user_id
   )
  end
   
end
