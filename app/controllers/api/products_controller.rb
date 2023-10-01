class Api::ProductsController < ApplicationController

  before_action :set_product, only: %i[show update destroy]
  def index
    @products = Product.all
    render json: @products,  methods: :image_urls
  end

  def show
    render json: @products, status: :ok
  end

  def create
    @product = Product.upsert_by_url(product_params[:url], product_params.except(:url))  # update or insert product into database

    if @product.valid?
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