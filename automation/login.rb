require 'selenium-webdriver'
# require 'watir'

# ===============================
# |          Login              |
# ===============================

#Firefox browser instantiation
driver = Selenium::WebDriver.for :firefox

# Loading pug-app
# Doesn't maintain history
driver.get("http://localhost:3000/");
  # Another way to navigate, Maintains history
  # driver.navigate().to("https://pug-app.herokuapp.com/");

# Enter username
# Put send_keys value in untracket file
login_test = driver.find_element(:id, "bar")
login_test.send_keys ""

# Enter password  (update password field to have ID)
# Put
pw_test = driver.find_element(:id, "passwordBar")
pw_test.send_keys ""

# Login for privided username and password (update button to have ID)
signin_button = driver.find_element(:id, "signinBar")
signin_button.click

# Exit browser
# driver.quit


# ===============================
# |       Create Event           |
# ===============================

# Find and click add event button
create_event = driver.find_element(:id, 'addEventbtn')
create_event.click

# Fill in info for creating an event
