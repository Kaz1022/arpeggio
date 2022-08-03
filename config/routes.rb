Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :events 
    # do
    #     collection do
    #     get :search_city
    #   end
    # end

    post :signup, to: "users#create"
    get "/events/search_city/:city", to: "events#search_city"
  end
  
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

