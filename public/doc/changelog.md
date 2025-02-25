# Change Log

> From latest version to original version

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
