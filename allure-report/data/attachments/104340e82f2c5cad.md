# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Loginpage.spec.js >> Valid user login
- Location: tests\Loginpage.spec.js:6:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Tearing down "context" exceeded the test timeout of 60000ms.
```

```
Fixture "trace recording" timeout of 60000ms exceeded during teardown.
```

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('#loginEmail')

```

```
Error: browserContext.close: Test timeout of 60000ms exceeded.
Browser logs:

<launching> C:\Users\HP\AppData\Local\ms-playwright\chromium-1248\chrome-win64\chrome.exe --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,BlockOriginHeaderModificationOnRedirect,AvoidCorsURLLoaderRestartOnRedirect,Translate,AutoDeElevate,OptimizationHints,NetworkTimeServiceQuerying,AimEnabled,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --disable-updater-scheduler --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --no-sandbox --user-data-dir=C:\Users\HP\AppData\Local\Temp\playwright_chromiumdev_profile-Pc57Vm --remote-debugging-pipe --no-startup-window
<launched> pid=9584
[pid=9584][err] [9584:7876:1019/224039.621:ERROR:components\system_cpu\cpu_probe_win.cc:112] PdhAddEnglishCounter failed for '\Processor(_Total)\% Processor Time': Error (0x13D) while retrieving error. (0x800007D0)
[pid=9584][err] [9584:7876:1019/224159.673:ERROR:components\system_cpu\cpu_probe_win.cc:112] PdhAddEnglishCounter failed for '\Processor(_Total)\% Processor Time': Error (0x13D) while retrieving error. (0x800007D0)
[pid=9584][err] [9584:18164:1019/224259.677:ERROR:components\system_cpu\cpu_probe_win.cc:112] PdhAddEnglishCounter failed for '\Processor(_Total)\% Processor Time': Error (0x13D) while retrieving error. (0x800007D0)
[pid=9584][err] [9584:18164:1019/224359.690:ERROR:components\system_cpu\cpu_probe_win.cc:112] PdhAddEnglishCounter failed for '\Processor(_Total)\% Processor Time': Error (0x13D) while retrieving error. (0x800007D0)
[pid=9584] <gracefully close start>
```