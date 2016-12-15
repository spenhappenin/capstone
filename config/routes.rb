Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
    registrations: 'api/registrations',
    session: 'api/sessions'
  }

  post 'facebook_login', to: 'third_party_auth#facebook'

  namespace :api do
    get 'users/info'
  end

  get '*unmatched_route', to: 'home#index'
end
