class MyApp < Sinatra::Base
  get '/' do
    slim :main
  end
end
