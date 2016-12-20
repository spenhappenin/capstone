10.times do 
	User.create(username: Faker::Internet.user_name,
							first_name: Faker::Name.first_name,
							last_name: Faker::Name.last_name,
							dob: Faker::Date.between(1000.days.ago, Date.today),
							phone_number: Faker::PhoneNumber.cell_phone,
							favorite: ['basketball', 'soccer', 'football', 'golf'].sample,
							email: Faker::Internet.email,
							password: 'password')

end

puts 'Users Seeded!'