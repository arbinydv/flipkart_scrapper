# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

puts "Creating dummy scrapped data for the database"
Product.create(
  [
    {
      title: "Sunglasses",
      description: "This is a beautiful sunglass",
      mobile_number: "11111111111",
      price: "123",
      size: "medium",
      url: "http://www.sunglasses.com"
    },
    {
      title: "Kitchen",
      description: "This is a beautiful sunglass",
      mobile_number: "1111221111",
      price: "143",
      size: "medium",
      url: "http://www.sunglassesy.com"
    },
    {
      title: "Shoes",
      description: "This is a beautiful Shoes",
      mobile_number: "11111111111",
      price: "123",
      size: "medium",
      url: "http://www.sunglasses.com"
    },
    {
      title: "Wardrobe",
      description: "This is a beautiful sunglass",
      mobile_number: "11111111111",
      price: "523",
      size: "medium",
      url: "http://www.sunglasses.com"
    },
    {
      title: "Clothes",
      description: "This is a beautiful sunglass",
      mobile_number: "11111111111",
      price: "145",
      size: "large",
      url: "http://www.sunglasses.com"
    },
    {
      title: "Mouse",
      description: "This is a beautiful sunglass",
      mobile_number: "11111111111",
      price: "123",
      size: "small",
      url: "http://www.sunglasses.com"
    }
  ]
)
puts "Created database"
