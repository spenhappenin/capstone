class Api::EventsController < ApplicationController
  before_action :set_events, except: [:index, :new, :create, :search, :all]
  skip_before_action :verify_authenticity_token


  def index
    if params[:position]
      @position = params[:position][:lat]
      @position += ','
      @position += params[:position][:lng]
    end
    @events = Event.all
  end

  def new
  end

  def create
    if params[:position]
      @position = params[:position][:lat]
      @position += ','
      @position += params[:position][:lng]
    end
    @event = Event.new(events_params)
    @event.user_id = current_user.id
    unless @event.save
      render json: {errors: @event.errors}, status: 401
    end
  end

  def edit
  end

  def update
    if params[:position]
      @position = params[:position][:lat]
      @position += ','
      @position += params[:position][:lng]
    end
    unless @event.update(events_params)
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
    if params[:position]
      @position = params[:position][:lat]
      @position += ','
      @position += params[:position][:lng]
    end
    like_condition = "%#{params[:query].downcase}%"
    @events = Event.where('lower(name) like ? OR lower(venue) like ? OR lower(description) like ?
                          OR lower(street) like ? OR lower(city) like ? OR lower(state) like ?
                          OR lower(skill_level) like ? OR lower(sport) like ? OR lower(zip) like ?', like_condition,
                          like_condition, like_condition, like_condition, like_condition, like_condition,
                          like_condition, like_condition, like_condition)
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
