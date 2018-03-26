require 'selenium-webdriver'
# require 'watir'

# ===============================
# |          Login              |
# ===============================

#Firefox browser instantiation
driver = Selenium::WebDriver.for :firefox

website = "http://localhost:3000/"

# Loading pug-app
# Doesn't maintain history
driver.get();
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

sleep 6

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
choose_sport = driver.find_element(:id, 'sportDropdown')
# choose_sport.find_element(:text, 'Basketball').click

# Select date for pick event
date_select = driver.find_element(:id, 'date_picker')
date_select.click
driver.find_element(:class, 'btn-flat picker__today')
close_picker = driver.find_element(:class, 'btn-flat picker__close')
close_picker.click
