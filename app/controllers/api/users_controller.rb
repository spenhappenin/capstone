class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate_user!

  def info
    if current_user
      render json: current_user
    else 
      render json: {}
    end
  end
end
