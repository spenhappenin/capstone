require 'selenium-webdriver'
require 'rspec'
require 'faker'

do_it = "Do it! Just do it! Don't let your dreams be dreams. Yesterday, you said tomorrow. So just do it! Make your dreams come true! Just do it! Some people dream of success, while you're gonna wake up and work hard at it! Nothing is impossible! You should get to the point where anyone else would quit, and you're not gonna stop there! No, what are you waiting for? Do it! Just do it! Yes you can! Just do it. If you're tired of starting over, stop giving up!"
event_location_var = "Magna Rec Center"
event_name_array = ['Fist Fight Hockey', 'Badmouth Badmiton', 'Flippin Frisbee', 'Champion Ping Pong', 'Tennis Talk Up', 'Voyager Volleyball']
new_event_name = event_name_array.sample
website = "http://localhost:3000/"
