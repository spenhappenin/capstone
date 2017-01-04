@user = User.create(username: 'BreakfastFoodKing',
										first_name: 'Ronald',
										last_name: 'Swanson',
										dob: Faker::Date.between(1000.days.ago, Date.today),
										phone_number: Faker::PhoneNumber.cell_phone,
										favorite: 'football',
										email: 'test1@test.com',
										password: 'password')


@user.events.create(name: 'Liberty Park Football',
										sport: 'football',
										date: Faker::Date.forward(23),
										time: Time.now,
										capacity: 30,
										venue: 'Liberty Park',
										street: '600 E 900 S',
										city: 'Salt Lake City',
										state: 'Utah',
										zip: 84105,
										latitude: 40.7455,
										longitude: -111.8740,
										skill_level: 'Everyone',
										description: 'Come play football at Liberty Park. Bring whoever you want, we are wanting at least 30 people though. It will be a blast!')

@user.events.create(name: "Buttercup Soccer",
										sport: 'soccer',
										date: Faker::Date.forward(23),
										time: Time.now,
										capacity: 30,
										venue: 'Buttercup Park',
										street: '1525 Buttercup Dr',
										city: 'Sandy',
										state: 'Utah',
										zip: 84092,
										latitude: 40.56825509999999,
										longitude: -111.84740399999998,
										skill_level: 'Everyone',
										description: 'Some description...')


@user2 = User.create(username: 'MichaelGaryScott',
										first_name: 'Michael',
										last_name: 'Scott',
										dob: Faker::Date.between(1000.days.ago, Date.today),
										phone_number: Faker::PhoneNumber.cell_phone,
										favorite: 'basketball',
										email: 'test2@test.com',
										password: 'password')


@user2.events.create(name: "Scott's Tots BBall",
										sport: 'basketball',
										date: Faker::Date.forward(23),
										time: Time.now,
										capacity: 30,
										venue: 'Sugarhouse Park',
										street: '1330 2100 S',
										city: 'Salt Lake City',
										state: 'Utah',
										zip: 84106,
										latitude: 40.7209,
										longitude: -111.8563,
										skill_level: 'Everyone',
										description: 'Dont let the name fool you. Everyone is invited to come play some ball. If we can get enough people we will have a little tourny. Bring any equipment if you have any.')

@user2.events.create(name: "Draper Kickball",
										sport: 'kickball',
										date: Faker::Date.forward(23),
										time: Time.now,
										capacity: 30,
										venue: 'Draper Park',
										street: '12500 S 1300 E',
										city: 'Draper',
										state: 'Utah',
										zip: 84020,
										latitude: 40.523808,
										longitude: -111.85326900000001,
										skill_level: 'Everyone',
										description: 'Some description...')


@user3 = User.create(username: 'Craigman',
										first_name: 'Craig',
										last_name: 'Masters',
										dob: Faker::Date.between(1000.days.ago, Date.today),
										phone_number: Faker::PhoneNumber.cell_phone,
										favorite: 'basketball',
										email: 'test3@test.com',
										password: 'password')

@user3.events.create(name: "U of U Badminton",
										sport: 'badminton',
										date: Faker::Date.forward(23),
										time: Time.now,
										capacity: 30,
										venue: 'University of Utah',
										street: '201 President Cir',
										city: 'Salt Lake City',
										state: 'Utah',
										zip: 84112,
										latitude: 40.765023,
										longitude: -111.848931,
										skill_level: 'Everyone',
										description: 'Some description...')

@user3.events.create(name: "Provo Volleyball",
										sport: 'volleyball',
										date: Faker::Date.forward(23),
										time: Time.now,
										capacity: 30,
										venue: 'Bicentenial Park',
										street: '1600 E 1440 S',
										city: 'Provo',
										state: 'Utah',
										zip: 84606,
										latitude: 40.2144972,
										longitude: -111.63178470000003,
										skill_level: 'Everyone',
										description: 'Some description...')
























