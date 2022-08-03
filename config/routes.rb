Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :events

    post :signup, to: "users#create"
    post :login, to: 'sessions#login'
    delete :logout, to: 'sessions#logout'
    get :logged_in, to: 'sessions#logged_in?'
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


