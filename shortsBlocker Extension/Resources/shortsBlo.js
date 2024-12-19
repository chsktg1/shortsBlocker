try {
  // block the shorts url , redirecting to youtube home page
  if (window.location.pathname.includes("/shorts/")) {
    window.location.replace("https://www.youtube.com");
  }
} catch (error) {
  console.log("issue in redirecting to main page");
}

const checkIfItsYoutubeAndBlock = () => {
  try {
    Array.from(
      document.querySelectorAll(
        "#dismissible .style-scope .ytd-rich-shelf-renderer"
      )
    ).map((e) => (e.style.display = "none"));
      
  } catch (error) {
    console.log("issue in first try, one that blocks on main page");
  }
  try {
    Array.from(
      document.querySelectorAll("#contents > yt-horizontal-list-renderer")
    ).map((e) => (e.style.display = "none"));
      
  } catch (error) {
    console.log("issue in second try, the one that blocks in horizontal pane");
  }
};

const observer = new MutationObserver(checkIfItsYoutubeAndBlock);
observer.observe(document.body, { childList: true, subtree: true });

checkIfItsYoutubeAndBlock();
