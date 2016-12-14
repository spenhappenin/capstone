class Api::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token
  protect_from_forgery with: :exception
  skip_before_action :authenticate_user!
  clear_respond_to
  respond_to :json

  private

  def sign_up_params
    params.require(:user).permit(
      :first_name, :last_name, :dob, :role,
      :phone_number, :picture, :reliability,
      :favorites, :email, :verify_email, :password, :password_confirmation
    )
  end

  def account_update_params
    params.require(:user).permit(
    :first_name, :last_name, :dob, :role,
    :phone_number, :picture, :reliability,
    :favorites, :email, :verify_email, :password,
    :password_confirmation, :current_password
    )
  end

  def update_resources(resource, params)
    resource.update_without_password(params)
  end
end
