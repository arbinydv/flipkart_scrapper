FactoryBot.define do
  factory :product do
    url { 'http://example.com/product' }
    title { 'Sample Product' }
    description { 'This is a sample product description.' }
    size {'Medium'}
    price {'450'}
  end
end
