json.array! @events do |event|
  json.id event.id
	json.name event.name
	json.sport event.sport
	json.date event.date
	json.time event.time
	json.capacity event.capacity
	json.venue event.venue
	json.street event.street
	json.city event.city
	json.state event.state
	json.zip event.zip
	json.skill_level event.skill_level
	json.description event.description
	json.attending event.attending
	json.active event.active
	json.latitude event.latitude
	json.longitude event.longitude
	json.user_id event.user_id
  if @position
  	json.distance_from_user event.distance_from(@position).round(1)
  else
    json.distance_from_user 'Cannot Find Location'
  end
end
