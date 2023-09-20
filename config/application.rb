require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module FlipkartScrapper
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    routes.default_url_options = { host: 'localhost:3000' }
    #
    # config.time_zone = "Central Time (US & Canada)"
    config.autoload_paths << Rails.root.join('lib', 'app')
    config.action_controller.default_protect_from_forgery = true

    ## sidekiq configuration
    config.active_job.queue_adapter = :sidekiq

  end
end
