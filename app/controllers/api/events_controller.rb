class Api::EventsController < ApplicationController
  before_action :set_event, except: [:index, :new, :create]
  before_action :set_sport

  def index
    @events = @sport.events
  end

  def show
  end

  def new
  end

  def create
    @event = @sport.events.new(event_params)

    respond_to do |format|
      if @event.save
        format.json { render :show, status: :created }
      else
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @event.update(event_params)
        format.json { render :show, status: :ok }
      else
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

    def destroy
      @event.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    end


  private
    def event_params
      params.require(:event).permit(:name, :date, :time, :capacity, :venue,
                                    :stree, :city, :state, :zip, :skill_level,
                                    :description, :attending, :active)
    end

    def set_sport
      @sport = Sport.find(params[:id])
    end

    def set_event
      @event = @sport.events.find(params[:id])
    end
  end
