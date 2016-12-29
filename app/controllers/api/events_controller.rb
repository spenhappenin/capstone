class Api::EventsController < ApplicationController
  before_action :set_events, except: [:index, :new, :create]
  skip_before_action :verify_authenticity_token


  def index
    @events = Event.all
    render json: @events 
  end

  def new
  end

  def create
    @event = Event.new(events_params)
    address = "#{@event.street}, #{@event.city}, #{@event.state}"
    latlong = Event.getLatLong(address)
    @event.latitude = latlong[:lat]
    @event.longitude = latlong[:lng]
    @event.user_id = current_user.id
    if @event.save
      render json: @event
    else
      render json: {}
    end
  end

  def edit
  end

  def update
    @event = Event.update(events_params)
    @event.user_id = current_user.id
    if @event.save
      render json: @event
    else
      render json: {}
    end
  end

    def destroy
      @event.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    end


  private
    def events_params
      params.require(:events).permit(:name, :date, :time, :capacity, :venue,
                                    :street, :city, :state, :zip, :skill_level,
                                    :description, :attending, :active, :sport)
    end

    def set_events
      @event = Events.find(params[:id])
    end
  end
