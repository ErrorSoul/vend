class MyApp < Sinatra::Base

  get '/' do
    slim :main
  end

  post '/' do
    content_type :json
    if params[:name].size >= 3 && params[:phone].size > 1
      { ara: params }.to_json
    else
      { error: 'error' }.to_json
    end
  end
end
