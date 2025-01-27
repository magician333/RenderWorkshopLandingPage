import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Doc() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="border rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-4">Preparation Before Use</h1>
          <h2 className="text-lg font-semibold mt-2">
            1. Shared Storage Space
          </h2>
          <p>
            Ensure you have a shared storage space (e.g.,{" "}
            <code>//192.168.0.10/render</code>) accessible by all computers.
          </p>

          <h2 className="text-lg font-semibold mt-2">2. Computer Settings</h2>
          <p>Set all computers to not sleep.</p>

          <h2 className="text-lg font-semibold mt-2">
            3. Blender File Preparation
          </h2>
          <p>
            In Blender, prepare the <code>.blend</code> file to be rendered
            (e.g., <code>test.blend</code>):
          </p>
          <ul className=" ml-6">
            <li>
              Select <code>File -&gt; External Data -&gt; Pack Resources</code>.
            </li>
            <li>
              Set rendering parameters (e.g., rendering engine, resolution,
              color management, etc.).
            </li>
            <li>
              Place the <code>test.blend</code> file in the shared storage space
              (e.g., <code>//192.168.0.10/render/test.blend</code>).
            </li>
          </ul>

          <h2 className="text-lg font-semibold mt-2">
            4. Blender Installation
          </h2>
          <p>
            Install Blender on all computers. It is recommended to use the same
            version.
          </p>
          <h2 className="text-lg font-semibold mt-2">
            5. Resource Allocation Suggestion
          </h2>
          <p>
            Use less powerful computers as Manager and more powerful computers
            as Worker.
          </p>

          <h1 className="text-3xl font-bold mb-4 mt-10">
            Worker Usage Instructions
          </h1>
          <ol className="list-decimal ml-6">
            <li>
              <strong>Download and Extract:</strong> Download the latest Worker
              compressed file to the Worker computer and extract it.
            </li>
            <li>
              <strong>Start Worker:</strong> Select the file suitable for your
              operating system and start the Worker.
            </li>
            <li>
              <strong>Initial Setup:</strong> On the first launch, the setup
              interface will appear. Configure the relevant parameters, press{" "}
              <code>Control + S</code> to save, and then press <code>Esc</code>{" "}
              to exit.
            </li>
            <li>
              <strong>Restart Worker:</strong> Restart the Worker. On the first
              launch, it will automatically detect the Cycles rendering devices
              and GPU backend set in Blender (this may take several seconds).
            </li>
            <li>
              <strong>Network Permissions:</strong> If prompted for network
              access permissions for the Worker, allow it.
            </li>
            <li>
              <strong>Configuration Success:</strong> If the Worker homepage
              displays all parameters correctly, the configuration is
              successful.
            </li>
          </ol>

          <h1 className="text-3xl font-bold mb-4 mt-10">
            Manager Usage Instructions
          </h1>
          <ol className="list-decimal ml-6">
            <li>
              <strong>Install the Plugin:</strong> Download the latest Manager
              plugin file to the Manager computer, install it in Blender, and
              enable the plugin.
            </li>
            <li>
              <strong>Open the Blend File:</strong> Open the <code>.blend</code>{" "}
              file to be rendered (e.g.,{" "}
              <code>//192.168.0.10/render/test.blend</code>).
            </li>
            <li>
              <strong>Open the RenderWorkshop Panel:</strong> Press{" "}
              <code>N</code> to open the N panel and locate RenderWorkshop.
            </li>
            <li>
              <strong>Set Server Port:</strong> In the Network Service Section,
              set the server port (must match the port number in the Worker
              settings). If there are no port conflicts, it is recommended to
              keep the default.
            </li>
            <li>
              <strong>Start the Server:</strong> Click the Start Server button.
              If prompted for network access permissions, allow it.
            </li>
            <li>
              <strong>Worker Connection:</strong> If the Worker is running and
              configured correctly, it will automatically connect and appear in
              the Worker list.
            </li>
            <li>
              <strong>Worker Verification:</strong> The Manager will
              automatically verify the Worker. If verification fails, click the
              button on the left side of the Worker to verify manually.
            </li>
            <li>
              <strong>Refresh Scene List:</strong> Click the Refresh button to
              display the scene information of the <code>.blend</code> file.
            </li>
            <li>
              <strong>Select Rendering Type:</strong> Choose between Image or
              Animation pages as needed.
            </li>
            <li>
              <strong>Set Rendering Parameters:</strong>
              <ul className=" ml-6">
                <li>
                  <strong>Image:</strong> Tiles: Divide the image into several
                  blocks for rendering (e.g., 4 means dividing into 4x4=16
                  blocks). Set a larger value for high resolutions.
                </li>
                <li>
                  <strong>Animation:</strong> Split: Divide the animation frames
                  into different intervals for rendering (e.g., 1-60 frames
                  divided into 1-15, 16-30, 31-45, 46-60). Avoid setting this
                  value too small.
                </li>
              </ul>
            </li>
            <li>
              <strong>Add Scenes (Optional):</strong> Click the + button at the
              bottom left of the scene list, set the scene parameters, and add
              it to the scene list.
            </li>
            <li>
              <strong>Real-Time Preview:</strong> Check the Preview option under
              the scene list to preview image rendering in real-time.
            </li>
            <li>
              <strong>Check and Re-render Missing Frames (Optional):</strong>{" "}
              Check this option to re-render missing frames after rendering is
              complete.
            </li>
            <li>
              <strong>Verify Settings:</strong> Ensure all hosts in the Worker
              list are connected and verified successfully.
            </li>
            <li>
              <strong>Start Rendering:</strong> Click the Render Image or Render
              Animation button to start rendering.
            </li>
            <li>
              <strong>Rendering Results:</strong> The rendered content will be
              saved in the same directory as the <code>.blend</code> file.
            </li>
            <li>
              <strong>Real-Time Feedback:</strong> View real-time rendering
              feedback in the message list.
            </li>
            <li>
              <strong>Heartbeat Detection (Optional):</strong> During rendering,
              heartbeat detection is performed on the Worker.
            </li>
            <li>
              <strong>Cancel Rendering (Optional):</strong> Click the Cancel
              button to cancel rendering.
            </li>
            <li>
              <strong>Message List Operations (Optional):</strong>{" "}
              Expand/collapse the message list or clear it as needed.
            </li>
          </ol>

          <h1 className="text-3xl font-bold mb-4 mt-10">Appendix</h1>
          <div>
            <h2 className="text-lg font-semibold mt-2">
              1. Worker Settings Explanation
            </h2>
            <ul className=" ml-6">
              <li>
                <strong>Server IP:</strong> Automatically detects the Manager's
                IP address within the subnet by default.
              </li>
              <li>
                <strong>Server Port:</strong> Automatically detects the
                Manager's service port within the subnet by default.
              </li>
              <li>
                <strong>Blender Path:</strong> Automatically detects the Blender
                installation path by default.
              </li>
              <li>
                <strong>Cycles Render Both:</strong> Choose whether to enable
                both CPU and GPU rendering.
              </li>
              <li>
                <strong>Retry Interval Seconds:</strong> Set the retry interval
                after failing to connect to the Manager.
              </li>
              <li>
                <strong>UPnP Discovery Seconds:</strong> Set the time for the
                Worker to search for the Manager upon startup.
              </li>
              <li>
                <strong>Save Log:</strong> Enable this option to record Worker
                rendering information.
              </li>
              <li>
                <strong>Command Line Mode:</strong> Enable this mode to save
                resources.
              </li>
            </ul>

            <h2 className="text-lg font-semibold mt-2">
              2. Manager Manual Configuration Explanation
            </h2>
            <ul className=" ml-6">
              <li>
                <strong>Cycles Devices:</strong> Set the devices used by the
                Cycles rendering engine.
              </li>
              <li>
                <strong>GPU Backend:</strong> Set the GPU backend.
              </li>
              <li>
                <strong>Threads:</strong> Set the number of threads for Worker
                rendering (1-1024).
              </li>
              <li>
                <strong>BlendFile:</strong> Set the absolute path for the Worker
                to access the <code>.blend</code> file.
              </li>
            </ul>

            <h2 className="text-lg font-semibold mt-2">
              3. Solutions for Detecting Workers
            </h2>
            <ul className=" ml-6">
              <li>
                <code>get local blend file error:</code> Re-open the blend file
                or check Blender's permissions.
              </li>
              <li>
                <code>please save the blend file:</code> Save the blend file to
                the shared storage space.
              </li>
              <li>
                <code>xxx.xxx.xxx.xxx check timeout:</code> Check the network
                connection of the Worker and Manager.
              </li>
              <li>
                <code>xxx.xxx.xxx.xxx can't get blend file:</code> Ensure the
                Worker can access the blend file.
              </li>
              <li>
                <code>xxx.xxx.xxx.xxx does not obtain the same file:</code>{" "}
                Ensure both are accessing the same blend file.
              </li>
              <li>
                <code>xxx.xxx.xxx.xxx passed worker detection:</code> The
                detection is normal.
              </li>
            </ul>

            <h2 className="text-lg font-semibold mt-2">
              4. Preferences Explanation
            </h2>
            <ul className=" ml-6">
              <li>
                <strong>HeartbeatInterval:</strong> Set the heartbeat detection
                interval (in seconds).
              </li>
              <li>
                <strong>HeartbeatRetry:</strong> Set the number of heartbeat
                detection retries.
              </li>
            </ul>

            <h2 className="text-lg font-semibold mt-2">
              5. Local Batch Rendering
            </h2>
            <p>
              RenderWorkshop supports local batch rendering. Set the scene list
              parameters and click start rendering.
            </p>

            <h2 className="text-lg font-semibold mt-2">
              6. How to Set Worker Multi-Language
            </h2>
            <p>
              Copy the language file you need to the same directory of the
              worker program and modify the name of <code>lang.json</code>.
              Restart the worker to take effect.
            </p>
          </div>
        </div>
        <div className="mt-10 w-3/4">
          <p className=" text-4xl font-semibold">RenderWorkshop FAQ</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold text-sm">
                Does it support image or animation rendering?
              </AccordionTrigger>
              <AccordionContent>Yes, we're all for it.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-semibold text-sm">
                What does the rendering engine support?
              </AccordionTrigger>
              <AccordionContent>
                We currently only support the built-in EEVEE Next and Cycles
                rendering engines, if you have other engine adaptations, feel
                free to ask us!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-semibold text-sm">
                Does worker take up a lot of computer resources?
              </AccordionTrigger>
              <AccordionContent>
                The worker is just a command line program that takes up less
                than 10MB of memory when not rendering and does not consume
                CPU/GPU resources. When it receives a render job, it will call
                blender to consume the computer's performance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-semibold text-sm">
                How to make sure files are not lost during rendering?
              </AccordionTrigger>
              <AccordionContent>
                First of all make sure you have a shared read/write folder with
                the blend files you need to render, after the rendering is done
                it will automatically check for missing tiles or missing frames
                and re-render until this task is done!
              </AccordionContent>
            </AccordionItem>{" "}
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-semibold text-sm">
                My files involve privacy and security, will renderworkshop have
                the ability to upload data or read the contents of other files?
              </AccordionTrigger>
              <AccordionContent>
                Manager and worker need network access only for transferring
                data content between each other, generally for LAN intranet, and
                will not upload any of your information to any other server.
                Neither manager nor worker has the ability to read other
                irrelevant files.
              </AccordionContent>
            </AccordionItem>{" "}
            <AccordionItem value="item-6">
              <AccordionTrigger className="font-semibold text-sm">
                My manager and worker can't connect to each other, what should I
                do?
              </AccordionTrigger>
              <AccordionContent>
                First of all, please make sure that the server ip address and
                port in config.json under the worker folder are filled in
                correctly (manager can see the relevant information), and then
                please make sure that both manager and worker have network
                privileges, you can check your firewall to make sure they are
                not blocked!
              </AccordionContent>
            </AccordionItem>{" "}
            <AccordionItem value="item-7">
              <AccordionTrigger className="font-semibold text-sm">
                How should I find the rendered output?
              </AccordionTrigger>
              <AccordionContent>
                You can see the rendered output in the folder where the blend
                file is stored. Be careful to give read and write permissions to
                this folder on all computers before rendering!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="font-semibold text-sm">
                Why does the worker use TUI to run in the terminal instead of
                using GUI?
              </AccordionTrigger>
              <AccordionContent>
                Although running in the terminal may seem more complicated,
                computer resources can be saved more in the terminal. And you
                can run workers in the server (maybe most servers do not have a
                graphical interface, such as some Linux systems that do not have
                a desktop installed), which is more suitable for distributed
                deployment and has better applicability. In the future, we will
                develop blender's built-in worker plug-in, which saves the time
                of starting and ending the blender program. In theory, it can
                achieve faster rendering speed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="font-semibold text-sm">
                What is UPnP? Why does it ask me for network permissions when I
                start Worker?
              </AccordionTrigger>
              <AccordionContent>
                UPnP is a network automatic discovery protocol that can
                automatically discover and connect to the manager. Of course,
                this is limited to the same subnet (such as
                192.168.0.1-192.168.0.255). If there is no automatic connection,
                it may be that your two computers are not in the same subnet, or
                your router has not turned on UPnP. You can enable these
                functions or manually enter the manager's IP address and port in
                the settings to connect. If you don't want to enable UPnP, set
                UPnP discovery seconds to 0 in settings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="font-semibold text-sm">
                Why online rendering of a single image is sometimes not as fast
                as local rendering?
              </AccordionTrigger>
              <AccordionContent>
                Because when rendering online, the picture will be sliced ​​into
                different segments and sent to different computers for
                rendering, and then merged. During this period, the worker will
                start and shut down the blender multiple times, load the blend
                file, and consume network transmission time and so on. As a
                result, the rendering speed of a single image may become slower.
                Therefore, we recommend that you render large-resolution images
                and use Cycles and other expensive images, and be cautious about
                using too high tiles (we recommend between 2-4). A tiles of 2
                means that the picture will be divided into 2*2, and a tile of 3
                means that the picture will be divided into 3*3. A larger number
                of pictures means more task consumption. It is recommended to
                allocate your tasks reasonably.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
