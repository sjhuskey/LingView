// sync.js

export function setupTextSync() {
  // Find all media players (audio + video) that are marked "live"
  const mediaElements = document.querySelectorAll("[data-live='true']");

  let ts_tag_array = [];
  let ts_start_time_array = [];
  let ts_stop_time_array = [];

  if (mediaElements.length > 0) {
    // Attach listeners to each media element
    mediaElements.forEach((media) => {
      media.addEventListener("timeupdate", () => {
        if (!media.paused) {
          console.log("Syncing from", media.tagName, "at", media.currentTime);
          sync(media.currentTime);
        }
      });
      media.addEventListener("click", () => {
        if (!media.paused) {
          console.log("Manual sync from", media.tagName, "at", media.currentTime);
          sync(media.currentTime);
        }
      });
    });

    // Collect transcript segments
    ts_tag_array = document.getElementsByClassName("labeledTimeBlock");
    for (let i = 0; i < ts_tag_array.length; i++) {
      ts_start_time_array[i] = ts_tag_array[i].getAttribute("data-start_time");
      ts_stop_time_array[i] = ts_tag_array[i].getAttribute("data-end_time");
    }
  } else {
    ts_tag_array = document.getElementsByClassName("untimedBlock");
  }

  function scrollIntoViewIfNeeded(target) {
    const rect = target.getBoundingClientRect();
    if (rect.bottom > window.innerHeight) target.scrollIntoView(false);
    if (rect.top < 0) target.scrollIntoView();
  }

  function sync(current_time) {
    for (let i = 0; i < ts_tag_array.length; i++) {
      const start = parseFloat(ts_start_time_array[i]) / 1000.0;
      const end = parseFloat(ts_stop_time_array[i]) / 1000.0;

      // Highlight when within range
      if (current_time - 0.001 >= start && current_time <= end) {
        ts_tag_array[i].setAttribute("id", "current");
        scrollIntoViewIfNeeded(ts_tag_array[i]);
        highlightSentence(i);
      } else {
        unHighlightSentence(i);
        ts_tag_array[i].removeAttribute("id");
      }
    }
  }

  window.sync = sync; // keep accessible globally if needed

  function highlightSentence(i) {
    ts_tag_array[i].style.backgroundColor = "rgb(209, 200, 225)";
  }
  function unHighlightSentence(i) {
    ts_tag_array[i].style.backgroundColor = "transparent";
  }

  // Click handler on transcript timestamps
  $(".timeStamp").click(function () {
    const newTime = $(this).data("start_time");
    if (newTime) {
      updateTimestampQuery(newTime);
      setMediaCurrentTime(newTime);
    } else {
      const sentId = $(this).data("sentence_id");
      updateForUntimedFile(sentId);
    }
  });

  function updateForUntimedFile(sentId) {
    for (let i = 0; i < ts_tag_array.length; i++) {
      if (i + 1 === sentId) highlightSentence(i);
      else unHighlightSentence(i);
    }
    updateTimestampQuery(sentId);
  }

  function setMediaCurrentTime(timestampMilliseconds) {
    // Jump all media elements; whichever is playing will update sync
    mediaElements.forEach((media) => {
      media.currentTime = (timestampMilliseconds + 2) / 1000;
    });
  }

  function updateTimestampQuery(newSentenceIndex) {
    if (window.history.replaceState) {
      const newurl =
        window.location.href.replace(/\?.*$/, "") + `?${newSentenceIndex}`;
      window.history.replaceState({ path: newurl }, "", newurl);
    }
  }

  // Handle query params (?N = jump to sentence N)
  $(document).ready(function () {
    const query_index = document.URL.indexOf("?");
    const sentenceTimestampId = Number(document.URL.substr(query_index + 1));
    if (isFinite(sentenceTimestampId)) {
      setMediaCurrentTime(sentenceTimestampId + 1);
      if (ts_tag_array[sentenceTimestampId]) {
        ts_tag_array[sentenceTimestampId].setAttribute("id", "current");
        scrollIntoViewIfNeeded(ts_tag_array[sentenceTimestampId]);
      }
    }
  });
}
