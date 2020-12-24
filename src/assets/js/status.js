const alertOnlineStatus = () => {
  window.alert(
    navigator.onLine
      ? "NOTA: → Aplicación con acceso a internet, disfrute del contenido."
      : "NOTA: → Aplicación sin acceso a internet, por favor conecte a una red para poder acceder a contenido extra."
  );
};

window.addEventListener("online", alertOnlineStatus);
window.addEventListener("offline", alertOnlineStatus);

alertOnlineStatus();
