Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :events

    post :signup, to: "users#create"
    post :login, to: "sessions#create"
  end

    get "/me", to: "users#show"
    delete "/logout", to: "sessions#destroy"
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

