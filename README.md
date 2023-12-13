# AdBlocker

## Description
Most ad blockers today rely on restricting Cross-Origin Resource Sharing (CORS) to block ads. Unfortunately, YouTube has become adept at identifying and blocking users employing these ad-blockers, resulting in video playback restrictions.

Moreover, a significant number of these ad blockers are built on Chrome extension manifest v2, which is deprecated and will soon be unavailable. The transition to manifest v3 further complicates matters, restricting access to certain APIs and rendering existing ad blockers ineffective in the long run.

**AdBlocker** takes a different approach to address this issue. Instead of relying on traditional ad-blocking methods, it employs a unique strategy. When an ad is detected, the program accelerates its playback speed to 16x. Once the skip button becomes available, the script automatically clicks it, swiftly bypassing the ad. This process ensures that the ad is displayed for only one second before being effectively skipped.

## How it Works
The ad blocker operates by manipulating the playback speed and automatically interacting with the skip button when feasible. This unique approach allows users to enjoy an uninterrupted viewing experience on YouTube while avoiding the pitfalls of traditional ad-blockers.

## Features
- Fast and efficient ad skipping.
- Sidesteps YouTube's detection mechanisms.
- Responsive to changes in ad presentation.

## Installation
1. Clone this repository to your local machine.
    ```bash
    git clone https://github.com/your-username/AdBlocker.git
    ```

2. Open the extension settings in your browser (for Chrome, navigate to `chrome://extensions/`).

3. Enable "Developer mode."

4. Click on "Load unpacked" and select the directory where you cloned the repository.

5. The extension is now installed and ready to use.

## Usage
1. Navigate to YouTube and start watching a video.

2. The extension will automatically detect and skip ads, providing a seamless viewing experience.

## Disclaimer
Please be aware that manipulating the playback speed and automating interactions with websites may violate their terms of service. Use this extension responsibly and at your own risk.

## Contribution
Feel free to contribute to the project by forking the repository, making improvements, and creating pull requests. Bug reports and feature requests are also welcome!

Happy ad-free watching!
