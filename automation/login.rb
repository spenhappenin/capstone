require 'selenium-webdriver'
# require 'chromedriver-helper'
# require 'watir'

#Firefox browser instantiation
driver = Selenium::WebDriver.for :firefox

website = "http://localhost:3000/"
eventLocation = "Magna Rec Center"
do_it = "Do it! Just do it! Don't let your dreams be dreams. Yesterday, you said tomorrow. So just do it! Make your dreams come true! Just do it! Some people dream of success, while you're gonna wake up and work hard at it! Nothing is impossible! You should get to the point where anyone else would quit, and you're not gonna stop there! No, what are you waiting for? Do it! Just do it! Yes you can! Just do it. If you're tired of starting over, stop giving up!"
event_name_array = ['Fist Fight Hockey', 'Badmouth Badmiton', 'Flippin Frisbee', 'Champion Ping Pong', 'Tennis Talk Up', 'Voyager Volleyball']

# ===============================
# |         Go To Site          |
# ===============================
# Loading pug-app
# Doesn't maintain history
driver.get(website);
  # Another way to navigate, Maintains history
  # driver.navigate().to("https://pug-app.herokuapp.com/");

sleep 2


# ===============================
# |        Create Account        |
# ===============================
# Navigate to create account page
create_account = driver.find_element(:link_text, "Sign Up")
create_account.click
# Enter First Name (new fancy xpath for me!)
new_first_name = driver.find_element(:xpath, "//label[text()=(' First Name ')]/following-sibling::input[@class='placeholder black-text']")
new_first_name.send_keys 'John'
# Enter Last Name
new_last_name = driver.find_element(:xpath, "//label[text()=(' Last Name ')]/following-sibling::input[@class='placeholder black-text']")
new_last_name.send_keys 'Doe'
# Enter Email Address
new_email_adderss = driver.find_element(:xpath, "//label[text()=(' Email ')]/following-sibling::input[@class='placeholder black-text']")
new_email_adderss.send_keys 'test1@test.com'
# Enter Password for account
new_password = driver.find_element(:xpath, "//label[text()=(' Password ')]/following-sibling::input[@class='placeholder black-text']")
new_password.send_keys 'password'
# Confirm newly entered password
confirm_new_password = driver.find_element(:xpath, "//label[text()=(' Confirm Password ')]/following-sibling::input[@class='placeholder black-text']")
confirm_new_password.send_keys 'password'
# Look into Check boxes
# Checkboxes go here
# Create New Account
click_signup = driver.find_element(:class, 'btn')
click_signup.click

# Sign Out
# sign_out = driver.find_element(:link_text, '')

sleep 5


# ===============================
# |         Contact Us           |
# ===============================
# Contact Us button
contact_us_navigate = driver.find_element(:link_text, 'Contact')
contact_us_navigate.click
# Add name to contact us
contact_us_name = driver.find_element(:class, 'name-box')
contact_us_name.send_keys 'Owen Quigley'
# Add email to contact us
contact_us_email = driver.find_element(:class, 'email-box')
contact_us_email.send_keys 'test@test.com'
#Add comment to contact us
contact_us_comment = driver.find_element(:xpath, "//textarea[@placeholder='Write Message Here...']")
contact_us_comment.send_keys("What the jiminy crickets did you just flaming say about me, you little bozo? I’ll have you know I graduated top of my class in the Cub Scouts, and I’ve been involved in numerous secret camping trips in Wyoming, and I have over 300 confirmed knots. I am trained in first aid and I’m the top bandager in the entire US Boy Scouts (of America). You are nothing to me but just another friendly face. I will clean your wounds for you with precision the likes of which has never been seen before on this annual trip, mark my words. You think you can get away with saying those shenanigans to me over the Internet? Think again, finkle. As we speak I am contacting my secret network of MSN friends across the USA and your IP is being traced right now so you better prepare for the seminars, man. The storm that wipes out the pathetic little thing you call your bake sale. You’re frigging done, kid. I can be anywhere, anytime, and I can tie knots in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in road safety, but I have access to the entire manual of the United States Boy Scouts (of America) and I will use it to its full extent to train your miserable butt on the facts of the continents, you little schmuck. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your silly tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goshdarned sillyhead. I will throw leaves all over you and you will dance in them. You’re friggin done, kiddo.")

sleep 2


# ===============================
# |          Login              |
# ===============================
# Navigate to login page
login_page = driver.find_element(:link_text, 'Login')
login_page.click

sleep 2

# Enter username
# Put send_keys value in untracket file
login_test = driver.find_element(:id, "bar")
login_test.send_keys "test@test.com"

# Enter password  (update password field to have ID)
# Put
pw_test = driver.find_element(:id, "passwordAutomation")
pw_test.send_keys "password"

# Login for provided username and password
signin_button = driver.find_element(:class, "btn")
signin_button.click

sleep 2

# Exit browser
# driver.quit


# ===============================
# |       Create Event           |
# ===============================
# Find and click add event button
create_event = driver.find_element(:id, 'addEventbtn')
create_event.click

# Fill in info for creating an event
create_event_name = driver.find_element(:id, 'createEventName')
create_event_name.send_keys event_name_array.sample

# Select sport from dropdown
choose_sport_dropdown = driver.find_element(:class, 'select-dropdown')
choose_sport_dropdown.click
select_sport = driver.find_element(:xpath, "//span[text()=(' Baseball ')]")
select_sport.click

# Select date for pick event
date_picker = driver.find_element(:id, 'date_picker')
date_picker.click
today_date = driver.find_element(:class, 'picker__today')
today_date.click
close_picker = driver.find_element(:class, 'picker__close')
close_picker.click

# Select a time for the event (Super Jenky)
# event_time = driver.find_element(:xpath, "//input[@type='time']")
# event_time.send_keys :arrow_up, :tab, :arrow_down, :tab, :arrow_up
event_time = driver.find_element(:xpath, "//input[@type='number']")
event_time.send_keys [:shift, :tab], [:shift, :tab], [:shift, :tab], :arrow_up, :tab, :arrow_up, :tab, :arrow_down

# Set number of people to attend (Kinda Jenky)
event_capacity = driver.find_element(:xpath, "//input[@type='number']")
event_capacity.send_keys :backspace, "10"

# Event Venue
event_location = driver.find_element(:xpath, "//input[@placeholder='Dimple Dell Recreation']")
event_location.send_keys(eventLocation)

# Event Address
event_address = driver.find_element(:xpath, "//input[@placeholder='1234 USA Drive']")
event_address.send_keys '3270 S 8400 W'

# Event City
event_city = driver.find_element(:xpath, "//input[@placeholder='Salt Lake City']")
event_city.send_keys 'West Valley'

# Event State
event_state = driver.find_element(:xpath, "//label[text()=' State ']/following::input[@class='select-dropdown']")
event_state.click
select_state = driver.find_element(:xpath, '//span[text()="Utah"]')
select_state.click
# Didn't work, but good to konw locatoin_once_scrolled_into_view
# select_state = driver.find_element(:xpath, "//select[@class='initialized']/child::option[text()='Utah']")
# select_state.location_once_scrolled_into_view

# Event Zip code
event_zip = driver.find_element(:xpath, "//input[@placeholder='84011']")
event_zip.send_keys '84044'

# Event Skill Level
event_skill = driver.find_element(:xpath, "//label[text()=' Skill Level ']/following::input[@class='select-dropdown']")
event_skill.click
select_skill = driver.find_element(:xpath, "//span[text()=' Beginner ']")
select_skill.click

# Event Description
event_blurb = driver.find_element(:xpath, "//textarea[@placeholder='Write Description Here...']")
event_blurb.send_keys(do_it, :arrow_up, :arrow_up)

# Create Event
create_event = driver.find_element(:css, "input[class='center btn blue']")
create_event.click

sleep 2
