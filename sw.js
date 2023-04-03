self.addEventListener("push", (e) => {
  const config = {
    body: "mesaj içeriği alanı",
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "3",
    },
  };

  e.waitUntil(
    self.registration.showNotification("Yeni makale eklendi!", config)
  );
});
