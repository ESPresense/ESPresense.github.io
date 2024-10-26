FROM bretfisher/jekyll-serve

WORKDIR /workspace

# Copy Gemfile if it exists
COPY Gemfile* ./

# Install project dependencies
RUN bundle install || echo "No Gemfile found, skipping bundle install"

# Command to run Jekyll server with both configs
CMD ["bundle", "exec", "jekyll", "serve", "--config", "_config.yml,_config_dev.yml", "--host", "0.0.0.0"]