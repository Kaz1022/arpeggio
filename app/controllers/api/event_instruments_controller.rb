class Api::EventInstrumentsController < ApplicationController
  # before_action :set_event, only: %i[show update destroy]
  
  # GET /event_instruments
  def index
    @event_instruments = EventInstrument.all
    render json: @event_instruments
  end
  
# GET /event_instruments/1
  def show
    @event_instrument = EventInstrument.includes(:event, :attendees)
    .find_by(event_instruments: {event_id: params[:id]})
    render json: @event_instrument.as_json(:include => [:attendees])
  end

  def new
    @event_instrument = EventInstrument.new
  end


  # POST /event_instruments
  def create
    @event_instrument = EventInstrument.new(event_instrument_params)

    if @event_instrument.save
      render json: {
        status: :created, 
        event: @event_instrument
    }
    else
      render :new
    end
  end

  # PATCH/PUT /event_instruments/1
  def update
    @event_instrument = EventInstrument.includes(:event).find_by(event_instruments: {event_id: params[:id]})
    @event_instrument.update(status: params[:status])  #sending status and qty as params? 

    if @event_instrument.update(event_instrument_params) # would params below change due to api change

      render json: {
        status: :updated, 
        event_instrument: @event_instrument.to_json
    }

    else
      render json: @event_instrument.errors, status: :unprocessable_entity
    end
  end

  # DELETE /event_instruments/1
  def destroy
    @event_instrument.destroy
  end


  private

  # Use callbacks to share common setup or constraints between actions.
  # def set_event
  #   @event_instrument = EventInstrument.find(params[:id])
  # end

  # Only allow a trusted parameter "white list" through.
  def event_instrument_params
    params.require(:event_instrument).permit(status: [])
  end

end