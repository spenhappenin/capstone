class Api::NotificationsController < ApplicationController
	before_action :set_notification, except: [:index, :new, :create]

  def index
  	@notifications = current_user.notifications
  end

  def new
  	@notification = current_user.notifications.new
  end

  def create
  	@notification = current_user.notifications.new(notification_params)

  	respond_to do |format|
  		if @notification.save
  			format.json { render :notification_type, :text, :delivery_preference }
  		else
  			format.json { render json: @notification.errors, status: :unprocessable_entity }
  		end
  	end
  end

  def edit
  end

  def update
  	respond_to do |format|
      if @notification.update(notification_params)    
        format.json { render :notification_type, :text, :delivery_preference }
      else      
        format.json { render json: @notification.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
  	@notification.destroy
  	respond_to do |format|
  		format.json { head :no_content }
  	end
  end

  private 

	  def set_notification
	  	# Do we not use current_user here? ( ecommerce we didn't )
	  	@notification = current_user.notifications.find(params[:id])
	  end

	  def notification_params
	  	params.require(:notification).permit(:notification_type, :text, :delivery_preference)
	  end


end
