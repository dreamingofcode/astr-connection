class UserSerializer < ActiveModel::Serializer
    attributes :id,:name,:email,:password,:bio,:birthDate,:gender,:sexualOrientation,:zodiac,:age
  end
  