class Api::AttendeesController < ApplicationController
  # before_action :set_attendee, only: %i[show update destroy]
  
  # GET /attendee
  def index
    @attendee = Attendee.all
    render json: @attendee
  end
  
  # GET /attendee/1
  def show
    @attendee = Attendee.joins(:user).joins(:event_instrument).find(params[:id])
    # @attendee = Attendee.joins(:users).find(params[:id])

    render json: @attendee.as_json(:include => [:user])
  end

  def new
    @attendee = Attendee.new
  end


  # POST /attendee
  def create
    @attendee = Attendee.new(attendee_params)
    @attendee.save

    if @attendee.save
      render json: {
        status: :created, 
        attendee: @attendee.to_json
      }
    else
      render :new
    end

  end

  # PATCH/PUT /attendee/1
  def update
    @attendee = Attendee.includes(:event).find_by(attendee: {id: params[:id]})
    @attendee.update(accepted: params[:accepted])

    if @attendee.update(attendee_params)

      render json: {
        status: :updated, 
        attendee: @attendee.to_json
    }

    else
      render json: @attendee.errors, status: :unprocessable_entity
    end
  end

  # DELETE /attendee/1
  def destroy
    @attendee.destroy
  end


  private

  # Only allow a trusted parameter "white list" through.
  def attendee_params
    params.require(:attendee)
    params.permit(:attendee, :accepted, :user_id, :event_instrument_id)
  end

end

