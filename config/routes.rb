Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
    registrations: 'api/registrations',
    sessions: 'api/sessions'
  }

  post 'signup/create', to: 'signup#create', as: 'signup'
  resources :newsletter, only: [:new, :create]

  namespace :api do
    get 'users/info'
    get 'search_events', to: 'events#search'
    post 'facebook_login', to: 'third_party_auth#facebook'
    resources :user_events
    resources :events
  end

  get '*unmatched_route', to: 'home#index'
end
