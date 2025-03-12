function decryptMessage() {
  const password = document.getElementById("decryptPassword").value;
  try {
      const decrypted = CryptoJS.AES.decrypt(encryptedData, password).toString(CryptoJS.enc.Utf8);
      if (decrypted) {
          document.getElementById("decryptedMessage").innerText = "解密后的信息: " + decrypted;
      } else {
          document.getElementById("decryptedMessage").innerText = "密码错误或信息无法解密";
      }
  } catch (e) {
      document.getElementById("decryptedMessage").innerText = "解密失败";
  }
}
