class NewsletterMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.newsletter_mailer.daily.subject
  #
  def daily
    @greeting = "Hello"
    mail subject: args[:subject], to: args[:emails]
    mail to: "to@example.org"
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.newsletter_mailer.weekly.subject
  #
  def weekly
    @greeting = "Hello"
    mail subject: args[:subject], to: args[:emails]
    mail to: "to@example.org"
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.newsletter_mailer.monthly.subject
  #
  def monthly
    @greeting = "Hello"
    mail subject: args[:subject], to: args[:emails]
    mail to: "to@example.org"
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.newsletter_mailer.yearly.subject
  #
  def yearly
    @greeting = "Hello"
    mail subject: args[:subject], to: args[:emails]
    mail to: "to@example.org"
  end
end
