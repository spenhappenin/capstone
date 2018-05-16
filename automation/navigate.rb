require 'selenium-webdriver'
require_relative 'helper'

# ===============================
# |         Go To Site          |
# ===============================
# Loading pug-app
# Doesn't maintain history
driver.get(website);
  # Another way to navigate, Maintains history
  # driver.navigate().to("https://pug-app.herokuapp.com/");

sleep 2
