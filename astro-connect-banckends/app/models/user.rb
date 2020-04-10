class User < ApplicationRecord
    has_secure_password
    validates :email,:name,uniqueness:{case_sensitive:false}
    validates :age,:numericality => { greater_than_or_equal_to: 18, less_than: 60 }
    post "/auth", to: 'auth#create'
end
