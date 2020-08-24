export function swDev() {
  let url = `${process.env.PUBLIC_URL}/sw.js`;
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(url)
      .then((response) => {
        console.log("Service Worker registered.", response.scope);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
