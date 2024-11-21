function convertFileToBase64(file) {
  return new Promise((resolve) => {
    if (!file) {
      resolve(null);
    }

    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = () => {
      resolve(null);
    };

    reader.readAsDataURL(file);
  });
}

async function handleFileUpload(file) {
  const base64 = await convertFileToBase64(file);

  if (base64) {
    return base64;
  } else {
    console.error("Xəta baş verdi və ya fayl seçilmədi.");
  }
}

export default handleFileUpload;
