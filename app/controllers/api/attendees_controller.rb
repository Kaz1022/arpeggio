class Api::AttendeesController < ApplicationController
  # before_action :set_attendee, only: %i[show update destroy]
  
  # GET /attendee
  def index
    @attendee = Attendee.all
    render json: @attendee
  end
  
  # GET /attendee/1
  def show
    @attendee = Attendee.find(params[:id])
    render json: @attendee
  end

  def new
    @attendee = Attendee.new
  end


  # POST /attendee
  def create
    @attendee = Attendee.create!(attendee_params)

    if @attendee.save(attendee_params)
      render json: {
        status: :created, 
        attendee: @attendee
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
    params.require(:attendee).permit(attendees: [:accepted, :user_id, :event_instrument_id])
  end

end

