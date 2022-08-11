class Api::EventsController < ApplicationController
  before_action :set_event, only: %i[show update destroy]
  
  # GET /events
  def index
    @events = Event.with_attached_event_image.includes([:user, :event_instruments, :instruments]).all
    # 100 + 1 query problem

   # Event1 - EventInstruaments for event 1 - instrument 
   # Event2 - event_instruments for event 2
   # Event3 - 
   # Event4 - 

    render json: @events.as_json(:include => [:user, :event_instruments, :instruments], methods: [:event_image_data])
  end

  def search
    @events = Event.with_attached_event_image.joins(:instruments)
    .where(instruments: { name: params[:instrument] })
    .where('city = ? AND level = ? AND genre = ?', params[:city], params[:level], params[:genre])  
    render json: @events.as_json(:include => [:user, :event_instruments, :instruments], methods: [:event_image_data])
  end

  def instruments
    @instruments = Instrument.all
    render json: @instruments.to_json(:include => [:event_instruments])
  end
    
  # GET /users/:user_id/sessions
  def mysessions
    @events = Event.with_attached_event_image.includes([:user, :event_instruments, :instruments, :attendees])
    .where(user_id: params[:user_id])

    render json: @events.as_json(:include => [:user, :event_instruments, :instruments, :attendees], methods: [:event_image_data])
  end

    # GET /users/:user_id/favourites
  def myfavourites

    @events = Event.with_attached_event_image.joins(:user_favourites)
    .where(user_favourites: { user_id: params[:instrument] })

    render json: @events.as_json(:include => [:user, :event_instruments, :instruments], methods: [:event_image_data])
  end

  
  # GET /events/1
  def show
    render json: @event
  end

  def new
    @event = Event.new
  end


  # POST /events
  def create
    @event = Event.new(event_params)

    if @event.save
      render json: {
        status: :created, 
        event: @event
        # location: @event
    }
    else
      render json: @event.errors
      # render :new
    end
  end

  # PATCH/PUT /events/1
  def update
    @event = Event.find(params[:id])
    @event.update(event_image: params[:event_image])
    @image = rails_blob_path(@event.event_image)
    render json: {
      event: @event,
      event_image: @image
    }
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
    params.require(:event).permit( :user_id, :title, :city, :country, :level, :venue_style, :genre, :event_image, :description, :event_date, :start_time, :end_time)
  end

end