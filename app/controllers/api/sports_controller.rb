class Api::SportsController < ApplicationController
  before_action :set_sport, except: [:index, :new, :create]

  def index
    @sports = Sport.all
  end

  def show
  end

  def new
  end

  def create
    @sport = Sport.new(sport_params)

    respond_to do |format|
      if @sport.save
        format.json { render :show, status: :created }
      else
        format.json { render json: @sport.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
  end

  private
    def sport_params
      params.require(:sport).permit(:category)
    end

    def set_sport
      @sport = Sport.find(params[:id])
    end
end
