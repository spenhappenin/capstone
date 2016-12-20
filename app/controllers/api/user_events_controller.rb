class Api::UserEventsController < ApplicationController
  before_action :set_user_events, except: [:index, :new, :create]


  def index
    @user_events = UserEvents.all
  end

  def new
  end

  def create
    @user_events = current_user.user_events.new(user_events_params)

    respond_to do |format|
      if @user_events.save
        format.json { render :show, status: :created }
      else
        format.json { render json: @user_events.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @user_events.update(user_events_params)
        format.json { render :show, status: :ok }
      else
        format.json { render json: @user_events.errors, status: :unprocessable_entity }
      end
    end
  end

    def destroy
      @user_events.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    end


  private
    def user_events_params
      params.require(:user_events).permit(:name, :date, :time, :capacity, :venue,
                                    :stree, :city, :state, :zip, :skill_level,
                                    :description, :attending, :active, :sport)
    end

    def set_user_events
      @user_events = UserEvents.find(params[:id])
    end
  end
