// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorCommunityIntercom",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "CapacitorCommunityIntercom",
            targets: ["IntercomPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0"),
        .package(url: "https://github.com/intercom/intercom-ios-sp.git", from: "18.0.0")
    ],
    targets: [
        .target(
            name: "IntercomPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm"),
                .product(name: "Intercom", package: "intercom-ios-sp")
            ],
            path: "ios/Sources/IntercomPlugin"),
        .testTarget(
            name: "IntercomPluginTests",
            dependencies: ["IntercomPlugin"],
            path: "ios/Tests/IntercomPluginTests")
    ]
)