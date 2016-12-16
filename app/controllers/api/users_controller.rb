class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate_user!

  def info
    render json: current_user ? current_user : {}
  end
end
