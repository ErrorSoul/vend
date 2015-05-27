require 'rubygems'
require 'bundler'
require 'json'
require 'action_mailer'
require_relative  'mailer_init'
Bundler.require

require './myapp'
run MyApp
