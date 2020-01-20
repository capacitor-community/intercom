
  Pod::Spec.new do |s|
    s.name = 'CapacitorIntercom'
    s.version = '0.2.3'
    s.summary = 'Enable Intercom features for Capacitor apps'
    s.license = 'MIT'
    s.homepage = 'https://github.com/stewwan/capacitor-intercom'
    s.author = 'Stewan Silva'
    s.source = { :git => 'https://github.com/stewwan/capacitor-intercom', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.static_framework = true
    s.dependency 'Capacitor'
    s.dependency 'Intercom'
  end