# Verus Mobile 
The iOS/Android Verus Mobile multi-coin Wallet

Welcome to the Verus Mobile multi-currency crypto wallet test release! This mobile wallet will be the core code base going forward for the Verus mobile experience, including PBaaS and crypto application support in the future. The features currently included are: 

•Multiple account support, the ability to use different keys on the same phone

•VerusPay QR scanner integration, allowing users to go from scanning a Verus QR code to being prompted with a transaction to confirm in one step

•Support for 11 different coins, with more to come soon

•The ability to create VerusPay invoices compatible with the Verus Mobile app

Feel free to report any discovered bugs, issues, or suggestions by either publicly asking for community support on one of our mobile channels at https://discord.gg/VRKMP2S, or, for more discretion, emailing development@veruscoin.io.

# Privacy Statement
No personal data is stored or collected by the Verus Mobile application, except as necessary for authentication. All authentication data is stored locally.

The Verus Mobile application uses the following permissions for the following reasons:

•Internet connectivity: In order to fetch and post data and communicate with the blockchain through Electrum servers, the app requires internet connectivity. The signing of transactions is done locally and private keys are not shared over any network.

•Access to system alerts: In order to notify the user of important ongoing events while using the Verus Mobile application, the Verus Mobile application uses the system alert framework on both iOS and Android.

•Camera and Audio access: The Verus Mobile application's VerusPay QR code scanner is designed to read and parse VerusQR codes, or VerusPay invoices through the camera, and requires camera access to work properly. The user will be prompted to allow camera access upon first opening the VerusPay feature. Due to the current constraints of the library being used for VerusPay, the user will be asked to enable audio by default when starting VerusPay for the first time. Choosing to disable audio should in no way affect VerusPay's functionality. 

•Permission to vibrate the mobile device: The Verus Mobile application uses the vibration feature of the mobile device it is running on for VerusPay, in order to give feedback upon the scan of a QR code invoice.

•Permission to read/write to phone memory: The Verus Mobile application uses the mobile devices AsyncStorage memory storage to hold encrypted account data while the application isn't running.

# Disclaimer

THIS IS EXPERIMENTAL SOFTWARE AND IT IS PROVIDED "AS IS" AND ANY EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

# Build Instructions

## Android (on Ubuntu)

0. Clone GitHub repository, and `cd` into it

1. Install Android Studio
  - Required SDK Components:
    - Android SDK 35 (33 or higher will work)
    - System Image for Emulator (Intel x86_64)
    - NDK version 27.0.12077973 (or change `gradle.properties` to match your precise version)

2. Install `openjdk-17-jdk` package

3. Install `nvm` and run `nvm use 18.14`

4. Enable corepack with `corepack enable` for access to `yarn` commands

5. Run `yarn install` then `yarn android`

## iOS (on macOS)

0. Clone the GitHub repository and cd into it with a terminal window

1. Install Xcode and the Xcode command line build tools (version >= 14.0.1)

2. Install homebrew (version >= 3.6.14)

3. Install cocoapods (version >= 1.11.3)

4. Install node (version >= 16.14.1)

5. Install yarn (version >= 1.22.19)

6. Install rbenv to manage your ruby versions with `brew install rbenv ruby-build`

7. Run `rbenv init`, `rbenv install 2.7.5` and `rbenv global 2.7.5`

8. Run `yarn install`

9. Run `cd ios && pod install`, then if successful, `cd ..`

10. Setup a rust development environment by installing sourcery with `brew install sourcery`, `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`, `cargo install cargo-lipo`, and installing rustup

11. Run `rustup target add aarch64-apple-ios x86_64-apple-ios`

12. open in ios/verusmobile.xcworkspace in Xcode (DO NOT OPEN THE XCODEPROJ FILE)

13. Run `yarn bundle-ios`

14. Under Pods > Targets > ZcashLightClientKit > Build Settings, set "ZCASH_NETWORK_ENVIRONMENT" to "MAINNET"

15. Under Pods > Targets > react-native-verus-light-client-kit > Compile Sources, remove every file that contains "test" in its name, there should be a total of 24 files remaining

16. Run `yarn start` in a terminal window within the Verus-Mobile directory

17. Build the project in Xcode

### Troubleshooting

#### Build error containing "Permission Denied"

If Xcode fails to build with an error mentioning "permission denied", try setting user permissions on iOS/Pods/ZcashLightClientKit/ZcashLightClientKit/zcashlc/zcashlc.h to read/write and re-building through Xcode

#### Failure to compile using `cargo lipo --manifest-path`

If Xcode fails to compile the Rust component correctly, you will get an error stating that a command starting with `cargo lipo --manifest-path` failed to execute. Try copying that command in its entirety and running it in a local terminal window. If that succeeds, rebuild through Xcode.
