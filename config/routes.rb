Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :events 
    
    post :signup, to: "users#create"
    get "/events/search/:city", to: "events#search"
    # get "/events/search/:city/:level/:genre", to: "events#search"
  end
  
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

