require 'rails_helper'

RSpec.describe Api::ProductsController, type: :controller do
  let(:product) { create(:product) }

  describe 'GET #index' do
    it 'returns a JSON response with a list of products' do
      get :index

      expect(response).to have_http_status(:ok)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response).to be_an_instance_of(Array)
    end
  end

  describe 'POST #create' do
    it 'creates a new product' do
      product_params = { url: 'http://example.com/product' }

      expect do
        post :create, params: { product: product_params }
      end.to change(Product, :count).by(1)

      expect(response).to have_http_status(:created)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response['url']).to eq(product_params[:url])
    end
  end

  describe 'DELETE #destroy' do
    it 'deletes a product' do

      product2 = create(:product)
      
      expect(Product.exists?(product2.id)).to be true

      delete :destroy, params: { id: product2.id }

      expect(Product.exists?(product2.id)).to be false
      expect(response).to have_http_status(:no_content)
    end
  end
end
