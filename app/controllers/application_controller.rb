class ApplicationController < ActionController::Base
  protect_from_forgery with: :reset_session
end
