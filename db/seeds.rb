puts "Seeding Data ..."

users = User.create!([
  {
    first_name: "John",
    last_name: "Smith",
    handle: "Johnny",
    email: "johnsmith@test.com",
    password: "password",
    phone: "778-229-5711",
    profile_image: open_asset('user1.jpg'),
    city: "Toronto",
    country: "Canada",
    profile_public: true
  },
  {
    first_name: "Emily",
    last_name: "Brown",
    handle: "EmMusic",
    email: "emilybrown@test.com",
    password: "password",
    phone: "777-888-9999",
    profile_image: open_asset('user2.jpg'),
    city: "Toronto",
    country: "Canada",
    profile_public: true
  },
  {
    first_name: "Mike",
    last_name: "Lee",
    handle: "Mikey",
    email: "mikelee@test.com",
    password: "password",
    phone: "999-888-7777",
    profile_image: open_asset('user3.jpg'),
    city: "Vancouver",
    country: "Canada",
    profile_public: true
  },
  {
    first_name: "Anna",
    last_name: "Clark",
    handle: "Ananas",
    email: "annaclark@test.com",
    password: "password",
    phone: "888-666-7777",
    profile_image: open_asset('user4.jpg') ,
    city: "Vancouver",
    country: "Canada",
    profile_public: true
  },
  {
    first_name: "David",
    last_name: "Miller",
    handle: "GuitarLover",
    email: "davidmiller@test.com",
    password: "password",
    phone: "333-555-7777",
    profile_image: open_asset('user5.jpg'),
    city: "Duncan",
    country: "Canada",
    profile_public: true
  }

])