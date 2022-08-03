Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :events
    resources :sessions, only: [:create]

    post :signup, to: "users#create"
    delete :logout, to: 'sessions#destroy'
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


