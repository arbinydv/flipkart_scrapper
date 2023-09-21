### ScrapApp 📦✨
#### React on Rails App to scrape products from Flipkart and show the products sorted by category. 🛒🔍

## Overview 📋
This project leverages MVC and CRUD concepts in the Ruby on Rails tech stack to scrape and categorize products.
## Prerequisites 🛠️
Before you embark on this Rails adventure, ensure you have the following tools installed on your system:
- Ruby 🧡
- React ⚛️
- npm or yarn 📦
- Redis 🔄

## 1. Check out the repository 📦
```bash
For instance, if you have Github SSH configured on your machine:

git clone git@github.com:arbinydv/flipkart_scrapper.git

```
### 2. Getting project up and running  🚀
* Install Dependencies 
  * Database : `PostgreSQL` 🐘
  * Gems
     * Scraping
        - Nokogiri 🕷️
        - OpenUri 🌐
        - Esbundling gem
    * Background Job
        - sidekiq 
  
  * Project
    ```
    bundle install
    npm install  || yarn install 
    ```
* Migrating and Seeding the Scrapped Data 🌱

  Ensure that your PostgreSQL database is properly configured in `database.yml`
  ``` 
  rake db:create 
  
  rake db:migrate

  rake db:seed 
  ```

* Running Project  🏃
 * Rails Server with Javascript bundler
    ``` 
    ./bin/dev
    ```
 *  Start Redis for inmemory caching
    ``` 
    redis-server
    ```
 *  Start Sidekiq for background job and scrapping 
    ``` 
    bundle exec sidekiq 
    ```
 Now, your project is up and runnng at http://localhost:3000 🌐
#### 3. Dashboard Navigation
* Dashboard for Products sorted by category 📦🗂️
  ``` 
    localhost:3000
  ```
* Scrape Product and Add to Database 🔄🛍️
  ```
    localhost:3000\products
  ```
Feel free to explore and enjoy ScrapApp! 🎉
