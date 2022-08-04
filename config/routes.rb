Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :events
    resources :sessions, only: [:create]

    get :logged_in, to: 'sessions#logged_in'
    delete :logout, to: 'sessions#logout'
    post :signup, to: "users#create"
    post :new_event, to "events#create"
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


