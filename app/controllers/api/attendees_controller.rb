class Api::AttendeesController < ApplicationController

  def show 
    @attendee = Attendee.joins(:user).find(params[:id])

    render json: @attendee.as_json(:include => [:user])

  end

end
