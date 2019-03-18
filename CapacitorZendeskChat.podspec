require 'json'

  Pod::Spec.new do |s|
    # NPM package specification
    package = JSON.parse(File.read(File.join(File.dirname(__FILE__), 'package.json')))

    s.name = 'CapacitorZendeskChat'
    s.version = package['version']
    s.summary = package['description']
    s.license = package['license']
    s.homepage = package['homepage']
    s.author = package['author']
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
    s.dependency 'ZDCChat', '1.4.0'
    s.static_framework = true
    s.source = { :git => 'https://github.com/sencrop/capacitor-zendesk-chat', :tag => s.version.to_s }
    s.source_files = 'ios/CapacitorZendeskChat/Source/*.{swift,h,m}'
    s.swift_version = '4.2'
  end
