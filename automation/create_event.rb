require 'selenium-webdriver'
require_relative 'helper'

# ===============================
# |       Create Event           |
# ===============================
# Find and click add event button
create_event = driver.find_element(:id, 'addEventbtn')
create_event.click

# Fill in info for creating an event
create_event_name = driver.find_element(:id, 'createEventName')
create_event_name.send_keys new_event_name
puts new_event_name

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
event_location.send_keys(event_location_var)

# Event Address
event_address = driver.find_element(:xpath, "//input[@placeholder='1234 USA Drive']")
event_address.send_keys '3270 S 8400 W'

# Event City
event_city = driver.find_element(:xpath, "//input[@placeholder='Salt Lake City']")
event_city.send_keys 'Magna'

# Event State
event_state = driver.find_element(:xpath, "//label[text()=' State ']/following::input[@class='select-dropdown']")
event_state.click
select_state = driver.find_element(:xpath, '//span[text()="Utah"]')
sleep 1
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
sleep 1
select_skill.click

# Event Description
event_blurb = driver.find_element(:xpath, "//textarea[@placeholder='Write Description Here...']")
event_blurb.send_keys(do_it, :arrow_up, :arrow_up)

# Create Event
create_event = driver.find_element(:css, "input[class='center btn blue']")
create_event.click

sleep 2
