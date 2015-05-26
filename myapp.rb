class MyApp < Sinatra::Base

  get '/' do
    slim :main
  end

  post '/' do
    content_type :json
    name, phone = params[:name], params[:phone]
    if name.size >= 3 && phone.size > 1
      email = Mailer.contact(name, phone)
      email.deliver
      { ok: 'ok' }.to_json
    else
      { error: 'error' }.to_json
    end
  end
end
