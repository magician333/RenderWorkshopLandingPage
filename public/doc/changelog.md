# ChangeLog

> From latest version to original version

**0.36 2025.12.14** interim version
1. Basic image and animation rendering functions are now compatible with Blender 5.0; AOV rendering will be compatible in the next version.
2. Improved some text translations.
---

**0.35 2025.5.30** Emergency fix version
1. Fixed the issue with convertblendfile function reporting an error,Thanks for @VM
---
   
**0.34 2025.5.11** Optimized_version

1. Manager optimized the logic of receiving messages
2. Manager optimized the path escape under different systems
3. Fixed the bug of missing checkcode

---

**0.33 2025.4.18** Optimized_version

1. Added checksum automatic completion for worker Output Path
2. Optimized the length display of the worker message list. The limit of only the last five pieces of information is removed under the normal mode, and the message list is adjusted to scrolling display (the initial display may be incorrect on computers with multiple resolutions and different scaling ratios at the same time. Manually adjust the worker window size to restore normal display)
3. Optimized the worker operation logic, and no longer allowed to enter the settings page during rendering.
4. Optimized the way to obtain IP in the worker, and the new method is more stable.
5. Optimized the delay of reply manager in the worker and improve the response speed.
6. Optimized the accuracy of recording rendering time in the worker to two decimal places.
7. Optimized the robustness of the code that pulls blend files when detecting worker and added information return when pulling file errors.
8. Optimized the cursor jump of the worker settings page (the key needs to be pressed once more when jumping the head item)
9. Optimize the robustness of the code for automatically searching executable files for the worker
10. Optimize the performance of the worker setting page to verify the blender executable files
11. Optimize the manager's main page code and attribute management code
12. Optimize the manager's sending and worker receiving information to avoid errors caused by special characters such as scene names
13. Optimize the restart logic of the server after the service is disconnected in the manager
14. Optimize the code for repeated definitions of attributes in the SceneImageItem in the manager
15. Remove the options related to manager preference settings center jump detection, the default heartbeat detection interval is 10s, and the maximum error retry is 3 times
16. Fixed the bug where the manager check worker is likely to not be automatically checked or manually click the verification button multiple times without response
17. Fixed bug in the path during AOV rendering when the manager is empty
18. Fixed bug in the local rendering path when the manager does not fill in the custom rendering path
19. Fixed bug in the message that the message does not display ip when the manager does not fill in the ip.
20. Fixed bug in the garbled code caused by non-English characters in the drop-down list of the new scenes in the manager
21. Fixed bug in the display of the worker that the rendering is still output after the worker cancels the rendering
22. Fixed bug in the duplicate output and repeated return commands that occurred when the rendering was cancelled
23. Fixed bug in the bug in the error of quickly clicking to render again after canceling the rendering.

---

**0.32 2025.4.11** Important version

1. Allow custom rendering storage directory
2. Manager allows custom IP (Thanks to Spencer Scelfo's suggestions and testing)
3. Worker allows custom network interface
4. Worker homepage supports displaying local IP
5. Manager supports displaying debug information
6. Optimize the display of additional content in the scene list
7. Optimize the logic of IP detection network cards in worker
8. Optimize the worker interface
9. Fix the bug where the worker command line mode information output is duplicated
10. Fix the bug where the worker does not return content when the worker checks the md5 error
11. Fix the bug where the interface error occurs when the image rendering is used to render AOV rendering
12. Fix the bug that cannot be rendered may occur when online AOV rendering
13. Fixed a bug where missing active camera or view layer errors were checked and rendered missing frames

---

**0.31 2025.3.28** Optimized_version

1. Worker adds real-time rendering status
2. Worker adds display of Blender rendering errors
3. Worker adds placeholder for blending
4. Optimizes error handling for sampling and merge
5. Optimizes the stability of cleaning temporary scenes
6. Optimizes the stability of local animation rendering
7. Fixes the bug of merging errors without Alpha format picture tiles
8. Fixes network communication problem caused by worker binding network interface errors when computers have multiple network interfaces
9. Fixes the problem of inconsistent color of rendering pictures

---

**0.3 2025.3.21** Important version

1. Network image rendering now supports sample subset rendering (where each worker performs a portion of the sampling, and the manager combines all parts to form the complete image, available only for scenes using Blender 4.4 and above with Cycles rendering engine, experimental!)
2. Local image and animation rendering support for AOV (Arbitrary Output Variables, multi-layer, and multi-pass rendering).
3. Network image and animation rendering support for AOV (only when the tile count is 1).
4. Network animation rendering with AOV supports checking and re-rendering missing frames.
5. Adjusted AOV output file formats to match Blender's output formats.
6. Supports rendering of specified view layers within scenes, defaulting to the first view layer of the scene.
7. Supports rendering of specified active cameras within scenes, defaulting to the timeline (AOV rendering is disabled when specifying a camera).
8. The scene list now includes a function bar for setting sample subset, specifying rendering view layers, setting active cameras for rendering, enabling batch multi-layer rendering, and enabling batch multi-pass rendering.
9. Supports checksum functionality; the checksums of the manager and workers must match for successful detection.
10. In the worker's GPU backend, it's now possible to specify Vulkan as the rendering backend (default is OpenGL, switch manually to Vulkan), recommended for use with Blender 4.4 and above.
11. Moved the add custom scene functionality to the collapsible section below the list.
12. Added real-time progress display for file pulling.
13. Removed MD5 verification when workers pull files; sync now no longer pulls files, and files are pulled every time a check is performed.
14. Improved feedback for errors encountered during network rendering.
15. Adjusted the cancel button icon.
16. Fixed a bug where animation rendering wouldn't actively end the render state if re-checking wasn't selected.
17. Fixed a bug where messages in CommandLine Mode were missing time and status.
18. Fixed a rendering error that occurred after changing the file format and saving the file.
19. Note: If using image formats without an Alpha channel, there are issues with tile merging, caused by a bug in Blender's compositor system; we look forward to the official fix for this bug!

---

**V0.27 2025.2.25**

1. local image render and local animation render support rendering multiple view layers
2. support for switching scenes by clicking on the scene name in the scene list
3. optimized the logic of merging images, fixed the problem of loading extra image nodes when generating multi-layer openEXR

---

**V0.26 2025.1.26** Optimized_version

1. Added multi-language support for the manager, which syncs with the language selected in Blender's preferences (currently supports English, Simplified Chinese, Traditional Chinese, German, and Japanese).
2. Added language pack support for workers; place the lang.json file in the same directory as the worker application and restart the worker for the translation effect.
3. Optimized the logic for obtaining the color space when loading image previews.
4. Improved the handling of temporary local .blend files for workers, which are now automatically deleted when the program exits.
5. Refined the wording of some message prompts.
6. Optimized the UI code structure of the manager panel.
7. Improved the code structure logic in the manager's utils.
8. Optimized the image merging code and adjusted the logic for generating images with a single tile.
9. Fixed the node slot issue when rendering multi-layer EXR images, adjusted the export channel order to match the official export order, and corrected the error of missing the "Position" channel.
10. Resolved errors in obtaining scene display device, style effects, and other parameters during image rendering.
11. Fixed intermittent errors in setting the color space during image rendering.
12. Resolved the issue of the progress bar disappearing when refreshing the scene during the rendering process.

---

**V0.25 2025.1.20**

1. Added local rendering mode, where workers will automatically copy the .blend file to the local machine before rendering and delete it after rendering is complete. This can effectively boost Blender's rendering speed and reduce network bandwidth usage, with better performance for large .blend files and low-bandwidth networks.
2. Added the "Pull BlendFile" option in worker settings to enable local rendering mode, enabled by default.
3. Added support for Windows ARM processors in workers.
4. Fixed color space errors when loading image formats like EXR, which previously caused incorrect previews.
5. Improved the exit logic for workers in CommandLine mode, allowing the program to be exited using Control+C.
6. Updated the style and display position of the check button for workers in the manager, changing the circular icon to a computer icon.
7. Hidden the filter options in the manager's list.
8. Adjusted the style and position of the "Clear Messages" button in the manager.

---

**V0.24 2025.1.14**

1. Supports multi-channel and multi-layer exr rendering (experimental)
2. After the animation rendering is completed, the check of the scene list will also be unchecked
3. Fixed the error of missing starting frame when adding scenes in the animation
4. Fixed the exr file Format error problem
5. The default block setting for image rendering is 2
6. Optimized the code structure of merging images
7. Optimized the loading image logic of the image rendering process

---

**V0.23 2025.1.3** Optimized_version

1. Added ARM series chip support for MacOS
2. Fixed the problem that the heartbeat detection recognition error caused the stop when rendering the image.
3. Fixed the bug that when rendering the image, setting the cropping tiles value that is not divisible by 1 caused gaps in the final image.
4. Fixed the code abort during the heartbeat detection. Judgment error
5. Optimized the preview screen to be black when rendering pictures, optimizing the experience.
6. Added additional conditions for ending the heartbeat check after stopping rendering to ensure that the heartbeat check thread ends after ending rendering

---

**V0.22 2025.1.1** Important version

1. **Added UPnP mechanism**: Workers and managers can now automatically connect within the same subnet without manual configuration of server IP and port.
2. **New auto-detection for Blender executable path**: You can now press enter in the Blender Path setting to automatically complete the path.
3. **Manager message list save feature**: We've introduced the ability to save the manager's message list.
4. **Worker log save feature**: A new option to save logs has been added to the worker settings.
5. **CommandLine Mode return**: If problems such as using the win10 default terminal cause display errors or if you want to keep system usage extremely low, you can switch to CommandLine Mode.
6. **Enter key toggle for true/false in worker settings**: The enter key can now be used to switch between true and false values in the worker settings.
7. **Fixed crashes due to missing or mismatched field types in config files**: The system will now automatically reset to default values for any missing fields or field type mismatches in the config files.
8. **Resolved the issue where manager couldn't stop heartbeat checks when canceling tasks**.
9. **Optimized worker code architecture**: Improvements have been made to the worker's underlying code structure.
10. **Improved worker interface adaptive layout**: The worker interface now adapts more effectively to various screen layouts.
11. **Enhanced hints and error messages in worker settings**: We've refined the hints and error messages in the worker settings for better clarity and understanding.

---

**V0.21 2024.12.25** Important version

1. Rewritten the worker's detection method for configuration files. The first detection will automatically generate a default configuration file. Subsequent versions of workers do not come with config.json by default.
2. Rewritten the command generation for worker rendering images and deleted render_border.py file, subsequent versions of workers do not come with render_border.py
3. A new tab completion function has been added to the worker setting interface
4. The worker detection logic has been optimized and the startup speed of the worker has been improved
5. The worker has been optimized Server connection status display
6. Optimized the timeliness of worker message list feedback
7. Optimized worker interface display
8. Adjusted worker shortcut keys
9. Fixed the bug of Cycles automatically using CPU rendering
10. Fixed automatic cancellation when closing the server Task error problem

---

**V0.2 2024.12.20** Important version

1. The manager data will not be saved in the blend file, and the manager content of each scene will be consistent to avoid abnormal data status
2. Added task end information broadcast
3. Stop the server will also cancel the online task
4. Set the image rendering block to 2 (4 tiles) by default
5. Change the CPU and GPU both render to default false
6. Fixed the bug that the split of animation rendering defaults to 1
7. Manager optimizes the automatic recognition of blend file path
8. Manager optimizes the logic of heartbeat check
9. Worker optimizes the startup prompt
10. Worker optimizes the json reading efficiency
11. Worker optimizes the json file error exit logic

---

**V0.11 2024.12.11**

1. Support adding scenes by yourself in the scene list
2. If there is no worker, local rendering will be automatically used

---

**V0.091 2024.12.3** Optimized_version

1. The worker homepage supports displaying the default Cycles rendering device and GPU backend
2. Optimized the worker check logic
3. Optimized the manager to receive messages

---

**V0.09 2024.12.2** Important version

1. Workers use TUI (text-based user interfaces) for better usability
2. Added configuration detection function on the worker side
3. Improved the automatic detection function in the worker list
4. Fixed the error that if all workers are offline, they will still repeatedly detect and re-render the missing files

---

**V0.08 2024.11.21** Important version

1. Supports the cancel rendering function
2. Support automatic detection of blend file path
3. Support automatic checking when connecting to workers
4. Support displaying host name
5. Support displaying worker rendering status
6. Support customization of heartbeat detection time and maximum number of retries in preferences
7. Numbers will be automatically added to the rendered image and the original file will no longer be directly overwritten
8. It also supports displaying the progress bar of each project during rendering.
9. Use a separate folder for temporary files of rendered images
10. Fixed the problem of incorrectly ending the rendering state in rendered images
11. Fixed the problem of premature ending when merging pictures
12. Fixed the problem of skipping a certain scene when rendering pictures in multiple scenes
13. Fixed the problem that caused parsing errors when the worker received multiple messages at the same time.

---

**V0.07 2024.11.12**

1. Now when rendering animation, the tasks of all scenes will be integrated into one task. There is no need to wait for the task of one scene to be completed before starting the next rendering, which is more efficient
2. Remove the restrictions on compositing, and now rendering can enable compositing.
3. The worker can now display the local IP
4. Optimize some code

---

**V0.06 2024.11.7** Important version

1. Supports heartbeat detection to ensure that tasks can still be assigned to other online workers even after the worker goes offline
2. Support Cycles render both CPU+GPU
3. Adjust worker inspection method
4. Refresh the list to support saving original data
5. Fixed a large number of worker problems
6. Fix bugs in scene batch rendering
7. Fix tiff format problem
8. Fix progress bar for checking re-rendering loss
9. Some detailed adjustments and improvements

---

**V0.04 2024.10.30**

1. Info adds a new progress bar
2. Rewrite the workerlist inspection process
3. merge_image uses the copied new temporary scene and no longer takes up the original scene synthesis
4. recv_data adds timeout feedback
5. Optimize the timeliness of info feedback

---

**V0.03 2024.10.28**

1. Support automatic identification of Cycles Device and GPUBackend
2. The worker is no longer allowed to accept additional data while it is running
3. Add md5 check to blend file
4. Improve the server message queue

---

**V0.02 2024.10.24**

1. Support merge image with AgX, Filmic, Filmic log and Khronos PBR Neutral look
2. Support check workerlist
3. Disable render setting when rendering
4. Fix Cycles engine render bug
