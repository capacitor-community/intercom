
  Pod::Spec.new do |s|
    s.name = 'CapacitorCommunityIntercom'
    s.version = '1.0.3'
    s.summary = 'Enable Intercom features for Capacitor apps'
    s.license = 'MIT'
    s.homepage = 'https://github.com/capacitor-community/intercom'
    s.author = 'Stewan Silva'
    s.source = { :git => 'https://github.com/capacitor-community/intercom', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.static_framework = true
    s.dependency 'Capacitor'
    s.dependency 'Intercom'
  end