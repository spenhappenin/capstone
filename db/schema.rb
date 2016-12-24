# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161215220857) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "text",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
    t.integer  "event_id"
    t.index ["event_id"], name: "index_comments_on_event_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "sport",       null: false
    t.date     "date",        null: false
    t.time     "time",        null: false
    t.integer  "capacity"
    t.string   "venue",       null: false
    t.string   "street",      null: false
    t.string   "city",        null: false
    t.string   "state",       null: false
    t.integer  "zip",         null: false
    t.string   "skill_level", null: false
    t.text     "description"
    t.boolean  "attending"
    t.boolean  "active"
    t.string   "latitude"
    t.string   "longitude"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id"], name: "index_events_on_user_id", using: :btree
  end

  create_table "notifications", force: :cascade do |t|
    t.string   "notification_type",   null: false
    t.text     "text",                null: false
    t.string   "delivery_preference", null: false
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "user_events", force: :cascade do |t|
    t.integer  "event_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_user_events_on_event_id", using: :btree
    t.index ["user_id"], name: "index_user_events_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "first_name",                              null: false
    t.string   "last_name",                               null: false
    t.string   "dob",                                     null: false
    t.string   "phone_number"
    t.string   "picture"
    t.string   "role",                   default: "user"
    t.string   "reliability"
    t.string   "favorite"
    t.string   "availability"
    t.datetime "created_at",                              null: false
    t.datetime "updated_at",                              null: false
    t.string   "email",                  default: "",     null: false
    t.string   "encrypted_password",     default: "",     null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,      null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
