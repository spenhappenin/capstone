class Api::EventsController < ApplicationController
  before_action :set_events, except: [:index, :new, :create, :search]
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
    @event.update(events_params)
    if @event.save
      render json: @event
    else
      render json: {errors: @event.errors}, status: 401
    end
  end

  def destroy
    @event.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end


  def search
    like_condition = "%#{params[:query].downcase}%"
    results = Event.where('lower(name) like ? OR lower(venue) like ? OR lower(description) like ?
                          OR lower(street) like ? OR lower(city) like ? OR lower(state) like ?
                          OR lower(skill_level) like ? OR lower(sport) like ? OR lower(zip) like ?', like_condition,
                          like_condition, like_condition, like_condition, like_condition, like_condition,
                          like_condition, like_condition, like_condition)
    render json: results
  end

  private
    def events_params
      params.require(:events).permit(:name, :date, :time, :capacity, :venue,
                                    :street, :city, :state, :zip, :skill_level,
                                    :description, :active, :sport, attending: [])
    end

    def set_events
      @event = Event.find(params[:id])
    end
  end
