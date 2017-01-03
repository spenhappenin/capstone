class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def info
    render json: current_user ? current_user : {}
  end
end
