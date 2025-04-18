# Preparation Before Use

![RenderWorkshop System](/doc/renderworkshop_system.png)

> RenderWorkshop Architecture System

#### 1. Shared Storage Space

Ensure you have a shared storage space (e.g., `//192.168.0.10/render`) accessible by all computers.

#### 2. Computer Settings

Set all computers to not sleep.

#### 3. Blender File Preparation

In Blender, prepare the `.blend` file to be rendered (e.g., `test.blend`):

- Select `File -> External Data -> Pack Resources`.
- Set rendering parameters (e.g., rendering engine, resolution, color management, etc.).
- Place the `test.blend` file in the shared storage space (e.g., `//192.168.0.10/render/test.blend`).

#### 4. Blender Installation

Install Blender on all computers. It is recommended to use the same version.

#### 5. Resource Allocation Suggestion

Use less powerful computers as Manager and more powerful computers as Worker.

# Worker Usage Instructions

1. **Download and Extract:** Download the latest Worker compressed file to the Worker computer and extract it.
2. **Start Worker:** Select the file suitable for your operating system and start the Worker.
3. **Initial Setup:** On the first launch, the setup interface will appear. Configure the relevant parameters, press `Control + S` to save, and then press `Esc` to exit.
   ![worker-setting](/screenshot/worker-setting.png)
4. **Restart Worker:** Restart the Worker. On the first launch, it will automatically detect the Cycles rendering devices and GPU backend set in Blender (this may take several seconds).
5. **Network Permissions:** If prompted for network access permissions for the Worker, allow it.
6. **Configuration Success:** If the Worker homepage displays all parameters correctly, the configuration is successful.
   ![worker-homepage](/screenshot/worker-home.png)
   the initial display may be incorrect on computers with multiple resolutions and different scaling ratios at the same time. Manually adjust the worker window size to restore normal display

# Manager Usage Instructions

1. **Install the Plugin:** Download the latest Manager plugin file to the Manager computer, install it in Blender, and enable the plugin.
2. **Open the Blend File:** Open the `.blend` file to be rendered (e.g., `//192.168.0.10/render/test.blend`).
3. **Open the RenderWorkshop Panel:** Press `N` to open the N panel and locate RenderWorkshop.
4. **Set Server IP address and Port**: In the Network Service section, set the server IP address and port (must be the same as the port number in the Worker settings). If your computer has multiple IP address mappings, you can set the IP address manually. If there is no port conflict, it is recommended to keep the default value.
5. **Start the Server:** Click the Start Server button. If prompted for network access permissions, allow it.
6. **Worker Connection:** If the Worker is running and configured correctly, it will automatically connect and appear in the Worker list.
7. **Worker Verification:** The Manager will automatically verify the Worker. If verification fails, click the button on the left side of the Worker to verify manually.
8. **Refresh Scene List:** Click the Refresh button to display the scene information of the `.blend` file.
9. **Select Rendering Type:** Choose between Image or Animation pages as needed.
10. **Set Rendering Parameters:**

    - **Image - tiles:** Tiles: Divide the image into several blocks for rendering (e.g., 4 means dividing into 4x4=16 blocks). Set a larger value for high resolutions.
    - **Image - Samples Length:** Divide the image samples into different sampling length intervals (for example, 4096 samples, each sampling length is 1000, each segment renders 1000 samples, and a total of 1000+1000+1000+1000+96 images are rendered), and finally merge the images into a fully sampled image Only supports Blender 4.4.0 and above and the rendering engine is Cycles
    - **Animation:** Split: Divide the animation frames into different intervals for rendering (e.g., 1-60 frames divided into 1-15, 16-30, 31-45, 46-60). Avoid setting this value too small.

    You can click the expand button on the right side of the scene to expand the scene's additional settings, specifying a specific view layer or a specific camera to render.

    You can also enable multiple view layers or multiple passes for AOV rendering, and if your Blender version is higher than 4.4.0 and uses the Cycles renderer, you can also use the render subset feature for image rendering.

    ![Extra_setting](/screenshot/manager-extrasetting.png)

11. **Add Scenes (Optional):** Click the + button at the bottom left of the scene list, set the scene parameters, and add it to the scene list.

    ![Custom Scene](/screenshot/manager-customscene.png)

12. **Real-Time Preview:** Check the Preview option under the scene list to preview image rendering in real-time.
13. **Check and Re-render Missing Frames (Optional):** Check this option to re-render missing frames after rendering is complete.
14. **Verify Settings:** Ensure all hosts in the Worker list are connected and verified successfully.
15. **Start Rendering:** Click the Render Image or Render Animation button to start rendering.
16. **Rendering Results:** The rendered content will be saved in the same directory as the `.blend` file.
17. **Real-Time Feedback:** View real-time rendering feedback in the message list.
18. **Heartbeat Detection (Optional):** During rendering, heartbeat detection is performed on the Worker.
19. **Cancel Rendering (Optional):** Click the Cancel button to cancel rendering.
20. **Custom Output Path (Optional)**: You can set the path where the rendered files are exported. The manager and all workers must point to the same path
21. **Message List Operations (Optional):** Expand/collapse the message list or clear it as needed.
    ![Manager_Idling](/screenshot/manager-animation-idling.png)

# Appendix

## 1. Worker Settings Explanation

- **Server IP:** Automatically detects the Manager's IP address within the subnet by default.
- **Server Port:** Automatically detects the Manager's service port within the subnet by default.
- **Blender Path:** Automatically detects the Blender installation path by default.
- **Cycles Render Both:** Choose whether to enable both CPU and GPU rendering.
- **Retry Interval Seconds:** Set the retry interval after failing to connect to the Manager.
- **UPnP Discovery Seconds:** Set the time for the Worker to search for the Manager upon startup.
- **Network Interface:** If you have multiple network cards on your computer, you can select a specific network card to run the worker.
- **Save Log:** Enable this option to record Worker rendering information.
- **Command Line Mode:** Enable this mode to save resources.
- **Pull File:** Pull the files from the shared folder to the local rendering, which can improve the blend file reading speed when the network bandwidth is insufficient.
- **Check Code:** If you are in a multi-user environment, you can set a check code to verify whether the manager and worker belong to you. The check code of the manager and worker must be the same for the check to succeed.

## 2. Manager Manual Configuration Explanation

- **Cycles Devices:** Set the devices used by the Cycles rendering engine.
- **GPU Backend:** Set the GPU backend.
- **Threads:** Set the number of threads for Worker rendering (1-1024).
- **BlendFile:** Set the absolute path for the Worker to access the `.blend` file.

## 3. Solutions for Detecting Workers

- `get local blend file error:` Re-open the blend file or check Blender's permissions.
- `please save the blend file:` Save the blend file to the shared storage space.
- `xxx.xxx.xxx.xxx check timeout:` Check the network connection of the Worker and Manager.
- `xxx.xxx.xxx.xxx can't get blend file:` Ensure the Worker can access the blend file.
- `xxx.xxx.xxx.xxx does not obtain the same file:` Ensure both are accessing the same blend file.
- `xxx.xxx.xxx.xxx check code does not match: ` The check codes of the manager and worker do not match. The check codes of both parties must be the same.
- `xxx.xxx.xxx.xxx output path does not match or flag file losed: `The export paths set by the worker and manager may point to different directories, or the flag file may be missing. You can check whether the worker and manager point to the same directory, or whether the manager and worker have read and write permissions to this directory, or you can restart the server to rebuild the flag file.
- `xxx.xxx.xxx.xxx flag file MD5 does not match:` The md5 checksum of the flag file does not match. Please check whether the manager and worker point to the same directory and have read and write permissions.
- `xxx.xxx.xxx.xxx passed worker detection:` The detection is normal.

## 4. Preferences Explanation

- **HeartbeatInterval:** Set the heartbeat detection interval (in seconds).
- **HeartbeatRetry:** Set the number of heartbeat detection retries.

## 5. Local Batch Rendering

RenderWorkshop supports local batch rendering. Set the scene list parameters and click start rendering.

## 6. How to Set Worker Multi-Language

Copy the language file you need to the same directory of the worker program and modify the name of `lang.json`. Restart the worker to take effect.
