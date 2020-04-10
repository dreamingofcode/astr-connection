Rails.application.routes.draw do
  namespace :api do
      namespace :v1 do
      resources :users
      resources :zodiac_matches, only: [:index, :show]
      get '/signup', to: 'users#new'
      post '/users' => 'users#create'
      post "/auth", to: 'auth#create'
      get '/current_user', to: 'auth#show'
    end
  end
end
