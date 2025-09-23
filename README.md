# README

This is a fork of the repository for [LingView](https://github.com/BrownCLPS/LingView), "A web interface for viewing ELAN and FLEx files."

## Improvements

This code in this fork has been refactored to use HTML 5 elements for audio and video. It also eliminates the dependence on YouTube for remote video streaming. Instead, it replaces the `.youtube` file extension and logic with generic `.videourl` and `.audiourl` file extensions and logic for streaming both from any streamining source (e.g., Digital Ocean's Spaces).

## Prerequisites

1. Clone this repository onto your computer. From the command line, `git clone git@github.com:sjhuskey/LingView.git`. Alternatively, download the [zip file](https://github.com/sjhuskey/LingView/archive/refs/heads/master.zip) and expand it on your computer.
2. Install [Node Version Manager](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating): 
3. Install Node version 16: `nvm install 16`
4. Install Docker Desktop (optional, if you want to run LingView in a Docker container): [https://docs.docker.com/desktop/](https://docs.docker.com/desktop/)  

## Usage

There are two options for using this version of LingView.

### Local build

1. Using a command line tool (e.g., Terminal), navigate to the LingView directory. (e.g., `cd ~/Lingview`, if you cloned the repository into your home directory) 
2. Activate Node version 16: `nvm use 16`
3. Install Node modules: `npm install`. This will display a lot of deprecation warnings because Node 16 is way behind the current version. The deprecation warnings are harmless.
4. Build the site: `npm run quick-build`.

Assuming that those steps finish without error, you should now be able to open your favorite browser, select `Open` from the `File` menu, navigate to the LingView directory, and open the file `index.html`.

Note that instead of `npm run quick-build`, you can also run `npx serve` to run a local server and view your site at http://localhost:3000.

### As a Docker container

1. Install Docker on your computer. I recommend using [Docker Desktop]().
2. Clone this repository onto your computer. From the command line, `git clone git@github.com:sjhuskey/LingView.git`. Alternatively, download the [zip file](https://github.com/sjhuskey/LingView/archive/refs/heads/master.zip) and expand it on your computer.
3. Open the Terminal application and navigate to the `LingView` directory. On my computer, I installed it at ~/Sites/LingView, so I do `cd ~/Sites/LingView` to navigate to the directory.
4. Start the Docker app either by clicking on the Docker app's icon or entering the following command in the Terminal: `open -a docker`.
5. After Docker is up and running, bring up the LingView Docker container: `docker-compose up`. That will generate a lot of activity in the Terminal window. :wink: After you see `Available on: [1]   http://127.0.0.1:3000` or something similar, you can open a browser and go to <http://localhost:3000> to visit the site.

The Terminal will continue to scroll text. You can disregard the output.

To exit the LingView Docker app:

1. In the open Terminal window, enter the key stroke combination `CTRL-C` to stop the container.
2. To stop the Docker container, enter `docker-compose down`.

## To add files to the Index of Texts

- Drag and drop your `.eaf` files to `data/elan_files` 
- If you are streaming your media, copy the URL of the media file and paste it into the body of a plain text file. Save the file with the same exact name as the corresponding `.eaf` file, but use the extension `.videourl` for video or `.audiourl` for audio.
- If you are storing your media locally (i.e., on your computer or server) save the file with the same exact name of the corresponding `.eaf` file plus the appropriate extension (i.e., `.mp3`, `.mp4`, `.wav`) to `data/media_files`.

After adding your `.eaf` and media files, do `npm run quick-build` on the command line in your LingView directory to rebuild the index.

You might see something like this in the Terminal window:

```bash
WARN: Could not find .pfsx file for 2019-08-16-MR-narracion.eaf. Viewing preferences won't be used.
lingview-app  | [0] 2019-08-16-MR-narracion.eaf is missing video... ❌ Not found.
lingview-app  | [0] Done preprocessing ELAN and FLEx!
lingview-app  | [0] The following stories (IDs and filenames) were processed: 
lingview-app  | [0] {
lingview-app  | [0]   '71f939d8-3ec0-46cd-ab2d-0ae62904b37e': '2019-08-16-MR-narracion.eaf',
lingview-app  | [0]   '1ed3d641-acd9-4466-811d-17c8ed59844c': '20170804_kuke_chiste_FACQ.eaf',
lingview-app  | [0]   '1e3bff88-29b9-4b3f-be34-bffc38624bac': '103.xml'
lingview-app  | [0] }
lingview-app  | [0] 1 missing media files: [
lingview-app  | [0]   [ '2019-08-16-MR-narracion.mp4', '2019-08-16-MR-narracion.youtube' ]
lingview-app  | [0] ]
lingview-app  | [0] Successfully built and wrote search index.
```

That happens when your file is not associated with a video file. It is normal; nothing is really missing. As long as there is an associated audio file, you should be able to use LingView as expected.

## For help

Write to me at [huskey@ou.edu](mailto:huskey@ou.edu) if you encounter difficulty.