require 'selenium-webdriver'
# require 'chromedriver-helper'
# require 'watir'

# ===============================
# |          Login              |
# ===============================

#Firefox browser instantiation
driver = Selenium::WebDriver.for :firefox

website = "http://localhost:3000/"
eventLocation = "USANA"
do_it = "Do it! Just do it! Don't let your dreams be dreams. Yesterday, you said tomorrow. So just do it! Make your dreams come true! Just do it! Some people dream of success, while you're gonna wake up and work hard at it! Nothing is impossible! You should get to the point where anyone else would quit, and you're not gonna stop there! No, what are you waiting for? Do it! Just do it! Yes you can! Just do it. If you're tired of starting over, stop giving up!"

# Loading pug-app
# Doesn't maintain history
driver.get(website);
  # Another way to navigate, Maintains history
  # driver.navigate().to("https://pug-app.herokuapp.com/");

# Enter username
# Put send_keys value in untracket file
login_test = driver.find_element(:id, "bar")
login_test.send_keys "test@test.com"

# Enter password  (update password field to have ID)
# Put
pw_test = driver.find_element(:id, "passwordBar")
pw_test.send_keys "password"

# Login for privided username and password (update button to have ID)
signin_button = driver.find_element(:id, "signinBar")
signin_button.click

sleep 4

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
create_event_name.send_keys 'Rec Basketball'

# Select sport from dropdown
choose_sport_dropdown = driver.find_element(:class, 'select-dropdown')
choose_sport_dropdown.click
# First xpath \o/  (not working though)
# choose_sport = driver.find_element(:xpath, "//option[@value='baseball']")
# choose_sport.click

# Select date for pick event
date_picker = driver.find_element(:id, 'date_picker')
date_picker.click
today_date = driver.find_element(:class, 'picker__today')
today_date.click
close_picker = driver.find_element(:class, 'picker__close')
close_picker.click

# Select a time for the event (not working)
event_time = driver.find_element(:xpath, "//input[@type='time']")
event_time.send_keys '11:11pm'

# Set number of people to attend
event_capacity = driver.find_element(:xpath, "//input[@type='number']")
event_capacity.send_keys "10"

# Event Venue
event_location = driver.find_element(:xpath, "//input[@placeholder='Dimple Dell Recreation']")
event_location.send_keys(eventLocation)

# Event Address
event_address = driver.find_element(:xpath, "//input[@placeholder='1234 USA Drive']")
event_address.send_keys 'Electric Ave'

# Event City
event_city = driver.find_element(:xpath, "//input[@placeholder='Salt Lake City']")
event_city.send_keys 'Magna'

# Event State (THIS XPATH NEEDS MORE, SEEK HELP)
# event_state = dfe(:xpath, "//input[@class='select-dropdown']")
# even_state

# Event Zip code
event_zip = driver.find_element(:xpath, "//input[@placeholder='84011']")
event_zip.send_keys '84044'

# Event Skill Level (THIS XPATH NEEDS MORE, SEEK HELP)
# event_skill = driver.find_element(:xpath, "//input[@class='select-dropdown']")
# event_skill

# Event Description
event_blurb = driver.find_element(:xpath, "//textarea[@placeholder='Write Description Here...']")
event_blurb.send_keys(do_it)
