# Time Tracker

## Tech Stack

### Proposed Frontend and Deployment Approach

This project will use an Angular Progressive Web App (PWA) as the primary frontend. This provides offline capability, installability, and a single codebase across platforms.

### Web & Android

The PWA will serve as the main delivery mechanism.
For Android distribution, the app can later be wrapped using a Trusted Web Activity (TWA) to publish it to the Google Play Store.
iOS users can install the app via “Add to Home Screen” for a near-native experience.

### Offline Storage

IndexedDB will be used for client-side offline data storage.
The database layer will be wrapped with Dexie.js to simplify schema management and reduce boilerplate.
IndexedDB will be fully accessible from within the PWA.

### iOS App Store Path (Optional)

If the project proves valuable enough to justify native distribution, Capacitor can be used to wrap the PWA in an iOS-compatible native shell.
This approach enables compliance with Apple App Store requirements while preserving the existing Angular codebase.
This strategy prioritizes speed of development, offline-first functionality, and maximum platform reach with minimal duplication of effort.
