// =================================================================
// 🔥 KONFIGURASI DATABASE & GATEWAY PWA PRESENSI UGD
// =================================================================
const CONFIG = {
  VERSION: "v1.4.3",
  DEFAULT_QR: "UGD-SAMPANAHAN-SCAN",
  MONTHS: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],

  // Konfigurasi Firebase Realtime Database
  FIREBASE: {
    apiKey: "AIzaSyBvEdfaUp4EodR9zSMLGef4VPyU2ZyayLw",
    authDomain: "absensiugd-bd829.firebaseapp.com",
    databaseURL: "https://absensiugd-bd829-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "absensiugd-bd829",
    storageBucket: "absensiugd-bd829.firebasestorage.app",
    messagingSenderId: "69298444767",
    appId: "1:69298444767:web:e7c395a3614b9a2ea74c6a",
    measurementId: "G-JHMPY9S71M"
  },

  // Gateway Notifikasi WhatsApp (Fonnte)
  FONNTE_TOKEN: "p1NYTiLzm5KFnFAt9uNr",
  NOMOR_NOTIFICATION_CENTER: "120363427997735746@g.us"
};
