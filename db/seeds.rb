puts "Seeding Data ..."
User.destroy_all
Instrument.destroy_all
Event.destroy_all
UserInstrument.destroy_all
EventInstrument.destroy_all

puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'assets', file_name))
end

users = User.create!([
  {
    first_name: "Kaz",
    last_name: "Smith",
    handle: "Kazz",
    email: "johnsmith@test.com",
    password: "password",
    phone: "778-229-5711",
    city: "Toronto",
    country: "Canada",
    profile_public: true,
    bio: "Hey I live in Toronto, I like hanging out with poeple!"
  },
  {
    first_name: "Mari",
    last_name: "Brown",
    handle: "MMusic",
    email: "emilybrown@test.com",
    password: "password",
    phone: "647-701-7160",
    city: "Toronto",
    country: "Canada",
    profile_public: true,
    bio: "Hey I love singing, playing instruments and beer!"
  },
  {
    first_name: "Michaela",
    last_name: "Lee",
    handle: "Mikey",
    email: "mikelee@test.com",
    password: "password",
    phone: "647-395-7365",
    city: "Vancouver",
    country: "Canada",
    profile_public: true,
    bio: "I love going to gigs in Van!"
  },
  {
    first_name: "Anna",
    last_name: "Clark",
    handle: "Ananas",
    email: "annaclark@test.com",
    password: "password",
    phone: "778-229-5711",
    city: "Vancouver",
    country: "Canada",
    profile_public: true,
    bio: "I live in East Van, let's hang!!"
  },
  {
    first_name: "David",
    last_name: "Miller",
    handle: "GuitarLover",
    email: "davidmiller@test.com",
    password: "password",
    phone: "647-701-7160",
    city: "Duncan",
    country: "Canada",
    profile_public: true,
    bio: "Hey!I live in Duncan! Looking forward to meeting you!"
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
    description: "My apartment has a nice rooftop and I like to play music there. It's in Kits. Let's jam together!",
    post_active: true
  },
  {
    user_id: 1,
    title: "Looking for a vocalist for Friday night gig!",
    created_at: "2022-08-07 10:30:30",
    event_date: "2022-08-29",
    start_time: "18:00:00",
    end_time: "19:00:00",
    city: "Toronto",
    country: "Canada",
    level: "Beginner Friendly",
    venue_style: "At a small bar",
    genre: "Alternative rock",
    description: "Hi! I live in downtown Toronto and looking for a vocalist who wants to sing at a bar!",
    post_active: true
  }
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
    instrument_id: 7
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
    status: [
      {name:"Available", quantity: 2},
      {name:"Pending", quantity: 0},
      {name:"Filled", quantity: 0}
    ]
  },
  {
    event_id: 2,
    instrument_id: 7,
    status: [
      {name:"Available", quantity: 1},
      {name:"Pending", quantity: 0},
      {name:"Filled", quantity: 0}
    ]
  },
  {
    event_id: 2,
    instrument_id: 9,
    status: [
      {name:"Available", quantity: 1},
      {name:"Pending", quantity: 0},
      {name:"Filled", quantity: 0}
    ]
  },
  {
    event_id: 3,
    instrument_id: 7,
    status: [
      {name:"Available", quantity: 1},
      {name:"Pending", quantity: 0},
      {name:"Filled", quantity: 0}
    ]
  },
  {
    event_id: 4,
    instrument_id: 1,
    status: [
      {name:"Available", quantity: 1},
      {name:"Pending", quantity: 0},
      {name:"Filled", quantity: 0}
    ]
  },
  {
    event_id: 4,
    instrument_id: 9,
    status: [
      {name:"Available", quantity: 1},
      {name:"Pending", quantity: 0},
      {name:"Filled", quantity: 0}
    ]
  },
  {
    event_id: 5,
    instrument_id: 9,
    status: [
      {name:"Available", quantity: 0},
      {name:"Pending", quantity: 1},
      {name:"Filled", quantity: 0}
    ]
  }
])

attendee1 = Attendee.create!(
  {
    user_id: 2,
    event_instrument_id: 1,
    accepted: false
  }
)

attendee2 = Attendee.create!(
  {
    user_id: 3,
    event_instrument_id: 7,
    accepted: false
  }
)

users[0].image.attach(io: open_asset("user1.jpg"), filename: "user1.jpg", content_type: "application/jpeg")
users[1].image.attach(io: open_asset("user2.jpg"), filename: "user2.jpg", content_type: "application/jpeg")
users[2].image.attach(io: open_asset("user3.jpg"), filename: "user3.jpg", content_type: "application/jpeg")
users[3].image.attach(io: open_asset("user4.jpg"), filename: "user4.jpg", content_type: "application/jpeg")
users[4].image.attach(io: open_asset("user5.jpg"), filename: "user5.jpg", content_type: "application/jpeg")

events[0].event_image.attach(io: open_asset("event1.jpg"), filename: "event1.jpg", content_type: "application/jpeg")
events[1].event_image.attach(io: open_asset("event2.jpg"), filename: "event2.jpg", content_type: "application/jpeg")
events[2].event_image.attach(io: open_asset("event3.jpg"), filename: "event3.jpg", content_type: "application/jpeg")
events[3].event_image.attach(io: open_asset("event4.jpg"), filename: "event4.jpg", content_type: "application/jpeg")
events[4].event_image.attach(io: open_asset("event5.jpg"), filename: "event2.jpg", content_type: "application/jpeg")
