class User < ApplicationRecord
  has_many :reservations
  has_secure_password
  validates_uniqueness_of :email, :case_sensitive => false, :with => /.+@.+\..+/i

end
