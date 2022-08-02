class Api::EventsController < ApplicationController
  before_action :set_event, only: %i[show update destroy]
  
  # GET /events
  def index
    @events = Event.all
    render json: @events.to_json(:include => [:event_instruments, :instruments] )
    # render json: @events, each_serializer: EventSerializer
  end

  # GET /events/1
  def show
    render json: @event
  end

  # POST /events
  def create
    @event = Event.new(event_params)

    if @event.save
      render json: @event, status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_event
    @event = Event.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def event_params
    params.require(:event).permit( :title, :city, :country, :level, :venue_style, :genre, :event_image, :description, :post_active, :created_at, :updated_at, :user_id, :event_date, :start_time, :end_time)
  end

end