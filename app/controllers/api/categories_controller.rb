class Api::CategoriesController < ApplicationController
  before_action :assign_category, only: %i[show update destroy]
  
  def index
    @categories = Category.all
    render json: @categories, :include => {:products => {:methods => :image_urls,
      :only => [:id, :url, :title, :size, :description, :price, :mobile_number, :product_images]}}
  end

  def show
    render json: @categories, status: :ok
  end

  private

  def assign_category
    @category = Category.find(params[:id])
  end 
end
