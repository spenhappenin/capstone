require 'selenium-webdriver'
require './contact_us'
require './create_account'
require './create_event'
require './helper'
require './login'
require './navigate'

def e2e
  #Firefox browser instantiation
  driver = Selenium::WebDriver.for :firefox
  #Chrome browser instantiation
  # driver = Selenium::WebDriver.for :chrome
  driver.navigate().to("http://localhost:3000/")

  def e2e_stuff
    ruby 'navigate'
    ruby 'create_account'
    ruby 'contact_us'
    ruby 'login'
    ruby 'create_event'

    # Exit browser
    driver.quit
  end
end

ruby e2e.rb
