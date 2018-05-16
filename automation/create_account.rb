require 'selenium-webdriver'
require_relative 'helper'

# ===============================
# |        Create Account        |
# ===============================
# Navigate to create account page
create_account = driver.find_element(:link_text, "Sign Up")
create_account.click
# Enter First Name (new fancy xpath for me!)
new_first_name = driver.find_element(:xpath, "//label[text()=(' First Name ')]/following-sibling::input[@class='placeholder black-text']")
fake_first_name = Faker::Name.first_name
new_first_name.send_keys fake_first_name
# Enter Last Name
new_last_name = driver.find_element(:xpath, "//label[text()=(' Last Name ')]/following-sibling::input[@class='placeholder black-text']")
fake_last_name = Faker::Name.first_name
new_last_name.send_keys fake_last_name
puts "Name: " + fake_first_name + " " + fake_last_name
# Enter Email Address
new_email_adderss = driver.find_element(:xpath, "//label[text()=(' Email ')]/following-sibling::input[@class='placeholder black-text']")
fake_email_addersss = Faker::Internet.safe_email
new_email_adderss.send_keys fake_email_addersss
puts "Email: " + fake_email_addersss
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
sleep 1
sign_out_nav = driver.find_element(:xpath, "//li[@class='dropdown-button']")
sign_out_nav.click
sleep 1
sign_out = driver.find_element(:xpath, "//a[text()='Logout']")
sign_out.click
sleep 2
