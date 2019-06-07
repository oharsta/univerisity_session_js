document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");
  const oldContent = document.getElementById("oldContent");

  const resizeObserver = new ResizeObserver(entries => {
    const entry = entries[0];
    content.innerHTML = `Width: ${entry.contentRect.width}, Height: ${entry.contentRect.height}`;
  });

  const mutationObserver = new MutationObserver(mutationsList => {
    if (mutationsList[0].removedNodes.length > 0) {
      oldContent.innerHTML = mutationsList[0].removedNodes[0].data.toString();
    }
  });

  resizeObserver.observe(document.getElementById("body"));
  mutationObserver.observe(content, {attributes: true, childList: true, subtree: true});
});
