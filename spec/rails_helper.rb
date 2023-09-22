ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../config/environment', __dir__)
require 'rspec/rails'
require 'webmock/rspec'
require 'factory_bot_rails'

RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods
  ActiveJob::Base.queue_adapter = :test
end