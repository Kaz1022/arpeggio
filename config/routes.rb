Rails.application.routes.draw do
  namespace :api do
    resources :users, only: %i[create]

    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  end
end
