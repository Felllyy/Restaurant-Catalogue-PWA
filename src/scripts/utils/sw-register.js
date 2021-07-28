const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
    console.log('SW registered');
  }
};

export default swRegister;
