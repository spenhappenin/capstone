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
    respond_to do |format|
      if @sport.update(sport_params)
        format.json { render :show, status: :ok }
      else
        format.json { render json: @sport.errors, status: :unprocessable_entity }
      end
    end
  end

    def destroy
      @sport.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    end


  private
    def sport_params
      params.require(:sport).permit(:category)
    end

    def set_sport
      @sport = Sport.find(params[:id])
    end
end
