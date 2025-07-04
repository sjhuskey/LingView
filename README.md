# README

This is a fork of the repository for [LingView](https://github.com/BrownCLPS/LingView), "A web interface for viewing ELAN and FLEx files." I have modified it only slightly by adding components necessary for running LingView as a Docker container.

To use this version:

1. Install Docker on your computer. I recommend using [Docker Desktop](https://docs.docker.com/desktop/).
2. Clone this repository onto your computer. From the command line, `git clone git@github.com:sjhuskey/LingView.git`. Alternatively, download the [zip file](https://github.com/sjhuskey/LingView/archive/refs/heads/master.zip) and expand it on your computer.
3. Open the Terminal application and navigate to the `LingView` directory. On my computer, I installed it at ~/Sites/LingView, so I do `cd ~/Sites/LingView` to navigate to the directory.
4. Start the Docker app either by clicking on the Docker app's icon or entering the following command in the Terminal: `open -a docker`.
5. After Docker is up and running, bring up the LingView Docker container: `docker-compose up`. That will generate a lot of activity in the Terminal window. :wink: After you see `Available on: [1]   http://127.0.0.1:3000` or something similar, you can open a browser and go to <http://localhost:3000> to visit the site.

The Terminal will continue to scroll text. You can disregard that.

## To add files to the Index of Texts

Simply drag and drop your `.eaf` files to `data/elan_files` and your `.wav` files (or `.mp3` or `.mp4`) to `data/media_files`. The server running on the Docker container will process them and add them to the index. You might need to refresh your browser screen to see them.

Note that you might see something like this in the Terminal window:

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

## To exit the program

1. In the open Terminal window, enter the key stroke combination `CTRL-C` to stop the container.
2. To stop the Docker container, enter `docker-compose down`.

## For help

Write to me at [huskey@ou.edu](mailto:huskey@ou.edu) if you encounter difficulty.