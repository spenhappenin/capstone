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

