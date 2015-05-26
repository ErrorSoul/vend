# -*- coding: utf-8 -*-
class Mailer < ActionMailer::Base
  def contact(name, phone)
    mail(
      to:         "neurofag@gmail.com",
      from:       "test@example.com",
      subject:    "Поступила новая заявка",
      body:       "Добрый день.\nПоступила новая заявка от:\nИмя => #{name}\nТелефон #{phone}"
      )
    end
 

 
  configure do
    ActionMailer::Base.delivery_method = :smtp
    ActionMailer::Base.smtp_settings = {		
    address:          'smtp.mandrillapp.com',		
    port:             '587',		
    authentication:   :plain,		
    user_name:        'fl00r@yandex.ru',		
    password:         '_vnRhAh_pGhahZA7JOyFIg',		
    domain:           'afinvest.ru',		
    enable_starttls_auto:   true		
  }		

    
 
    #ActionMailer::Base.delivery_method = :smtp
    #ActionMailer::Base.perform_deliveries         = true
    #ActionMailer::Base.default_url_options[:host] = 'localhost:3000'
    #ActionMailer::Base.asset_host                 = 'localhost:3000'
    #ActionMailer::Base.smtp_settings = { address: 'localhost', port: '1025' }
    
    
  end
 
end
