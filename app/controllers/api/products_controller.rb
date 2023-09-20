class Api::ProductsController < ApplicationController

  before_action :set_product, only: %i[show update destroy]
  
  def index
    @products = Product.all
    render json: @products
  end

  def show
    render json: @products, status: :ok
  end

  def create
    @product = Product.new(product_params)

    puts "Step 1: Create Product"

    if @product.save
      render json: @product, status: :created
    else
      render json: { errors: @product.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @product.update(product_params)
      render json: @product, status: :ok
    else
      render json: { errors: @product.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @product.destroy
  end
  
  private

  def set_product
    @product = Product.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Product not found' }, status: :not_found
  end

  def product_params
    params.require(:product).permit(:url)
  end
end