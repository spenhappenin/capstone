class Api::EventsController < ApplicationController
  before_action :set_event, except: [:index, :new, :create]


  def index
    @events = Events.all
  end

  def new
  end

  def create
    @event = current_user.events.new(event_params)

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
                                    :description, :attending, :active, :sport)
    end
# testing something here
    def set_event
      @event = Events.find(params[:id])
    end
  end
