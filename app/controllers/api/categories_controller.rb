class Api::CategoriesController < ApplicationController
  before_action :assign_category, only: %i[show update]
  
  def index
    @categories = Category.all
    render json: @categories, :include => {:products => {:methods => :image_urls,
      :only => [:id, :url, :title, :size, :description, :price, :mobile_number, :ratings, :reviews, :total_rating, :image_urls]}}
  end

  def show
    render json: @categories, status: :ok
  end

  private

  def assign_category
    @category = Category.find(params[:id])
  end 
end
