puts "Seeding Data ..."
User.destroy_all
Instrument.destroy_all
Event.destroy_all
UserInstrument.destroy_all
EventInstrument.destroy_all

puts "Seeding Data ..."

users = User.create!([
  {
    first_name: "John",
    last_name: "Smith",
    handle: "Johnny",
    email: "johnsmith@test.com",
    password: "password",
    phone: "778-229-5711",
    profile_image: "user1.jpg",
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
    profile_image: "test image",
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
    profile_image: "test image",
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
    profile_image: "test image" ,
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
    profile_image: "test image",
    city: "Duncan",
    country: "Canada",
    profile_public: true
  }
])
instruments = Instrument.create!([
  {name: "Guitar"},
  {name: "Keyboard"},
  {name: "Violin"},
  {name: "Ukulele"},
  {name: "Piano"},
  {name: "Flute"},
  {name: "Drum"},
  {name: "Banjo"},
  {name: "Vocal"}
])

events= Event.create!([
  {
    user_id: 1,
    title: "Looking for two guitarists for jamming!",
    created_at: "2022-07-30 10:30:30",
    event_date: "2022-08-21",
    start_time: "18:00:00",
    end_time: "19:00:00",
    city: "Toronto",
    country: "Canada",
    level: "Beginner Friendly",
    venue_style: "In my garage",
    genre: "Alternative rock",
    event_image: "test image",
    description: "Hi! I live in downtown Toronto and looking for two guitarists to jam with me! All levels are welcome. My current favourite band is Arkells.",
    post_active: true
  },
  {
    user_id: 2,
    title: "A drummer and vocalist wanted!",
    created_at: "2022-07-29 10:30:30",
    event_date: "2022-08-23",
    start_time: "19:00:00",
    end_time: "20:00:00",
    city: "Toronto",
    country: "Canada",
    level: "Intermediate",
    venue_style: "At my studio",
    genre: "Indie Rock",
    event_image: "test image",
    description: "I play the guitar and I am looking for a drummer and a vocalist to make some music together! Nothing serious but just for fun.",
    post_active: true
  },
  {
    user_id: 3,
    title: "Looking for a drummer!",
    created_at: "2022-08-01 10:30:30",
    event_date: "2022-08-22",
    start_time: "16:00:00",
    end_time: "17:00:00",
    city: "Vancouver",
    country: "Canada",
    level: "Any level",
    venue_style: "My Garage",
    genre: "Indie Rock",
    event_image: "test image",
    description: "I have drums in my garage and I've been practicing by myself. I would love to exchange some tips and play with others just for fun!",
    post_active: true
  },
  {
    user_id: 4,
    title: "Roof Top Jam",
    created_at: "2022-07-29 11:45:30",
    event_date: "2022-08-22",
    start_time: "18:00:00",
    end_time: "20:00:00",
    city: "Vancouver",
    country: "Canada",
    level: "Intermediate",
    venue_style: "Rooftop",
    genre: "Any",
    event_image: "test image",
    description: "My apartment has a nice rooftop and I like to play music there. It's in Kits. Let's jam together!",
    post_active: true
  },
])

user_instruments = UserInstrument.create!([
  {
    user_id: 1,
    instrument_id: 1,
  },
  {
    user_id: 2,
    instrument_id: 1
  },
  {
    user_id: 3,
    instrument_id: 7
  },
  {
    user_id: 4,
    instrument_id: 4
  },
  {
    user_id: 5,
    instrument_id: 8
  }
])

event_instruments = EventInstrument.create!([
  {
    event_id: 1,
    instrument_id: 1,
    quantity: 2,
    status: "Available"
  },
  {
    event_id: 2,
    instrument_id: 7,
    quantity: 1,
    status: "Available"
  },
  {
    event_id: 2,
    instrument_id: 9,
    quantity: 1,
    status: "Available"
  },
  {
    event_id: 3,
    instrument_id: 7,
    quantity: 1,
    status: "Available"
  },
  {
    event_id: 4,
    instrument_id: 3,
    quantity: 1,
    status: "Available"
  },
  {
    event_id: 4,
    instrument_id: 8,
    quantity: 1,
    status: "Available"
  }
])

attendee1 = Attendee.create!(
  {
    user_id: 2,
    event_instrument_id: 1,
    accepted: false
  }
)
