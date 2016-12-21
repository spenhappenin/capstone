Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
    registrations: 'api/registrations',
    sessions: 'api/sessions'
  }

  

  namespace :api do
    get 'users/info'
    post 'facebook_login', to: 'third_party_auth#facebook'
  end

  get '*unmatched_route', to: 'home#index'
end
