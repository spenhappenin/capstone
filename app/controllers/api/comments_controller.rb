class Api::CommentsController < ApplicationController
  before_action :set_comment, except: [:index, :new, :create]
  before_action :set_event

  def index
    @comments = @event.comments
  end

  def show
  end

  def new
    @comment = @event.comments.new
  end

  def create
    @event = @sport.events.new(comment_params)

    respond_to do |format|
      if @comment.save
        format.json { render :show, status: :created }
      else
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @comment.update(comment_params)
        format.json { render :show, status: :ok }
      else
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

    def destroy
      @comment.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    end


  private
    def comment_params
      params.require(:event).permit(:text)
    end

    def set_event
      @sport = Event.find(params[:id])
    end

    def set_comment
      @comment = @event.comments.find(params[:id])
    end
  end
