# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :session_token, uniqueness: {scope: :username}, presence: true
    validates :username, :password_digest, presence: true
    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(username, password)
      user =  User.find_by(username: username)
      if user && user.is_password?(password)
        user
      else
        nil
      end
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.session_token.save
    end

    def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
        self.password_digest
    end

    def is_password?(password)#hunter2
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
end
