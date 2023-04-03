window.addEventListener("load", async () => {
  const subscribeButton = document.querySelector("#subscribeButton");

  const sw = await navigator.serviceWorker.register("./sw.js");

  subscribeButton.addEventListener("click", async () => {
    const serviceWorker = await navigator.serviceWorker.ready;
    const clientID = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BBsV9D75cDZqBgK5GEtQcIcvO8LBI3xEZx2S9JssdJcA3BmDkO4FJVAI0ifFzs21IYbUYJTKwiPLY7ZiUMlK2XI",
    });
  });
});
