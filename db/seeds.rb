puts "Seeding Data ..."

users = User.create!([
  {
    first_name: "John",
    last_name: "Smith",
    handle: "Johnny",
    email: "johnsmith@test.com",
    password: "password",
    phone: "778-229-5711",
    profile_image: nil,
    city: "Toronto",
    country: "Canada",
    profile_public: true
  }
])

