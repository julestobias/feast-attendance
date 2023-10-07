import { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";

function QRScanner() {
  const [scanResult, setScanResult] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const handleError = (error) => {
    console.error(error);
  };

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
      console.log(data);

      const currentDateObj = new Date();
      const formattedDate = currentDateObj.toLocaleDateString();
      const formattedTime = currentDateObj.toLocaleTimeString();

      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    }
  };

  // scanner on off
  const [isScannerActive, setIsScannerActive] = useState(false);
  const qrRef = useRef(null);

  const toggleScanner = () => {
    setIsScannerActive((prev) => !prev);

    if (qrRef.current) {
      if (isScannerActive) {
        qrRef.current.pause();
      } else {
        qrRef.current.play();
      }
    }
  };

  return (
    <div
      className={`w-full h-screen flex items-center justify-center bg-white flex-col`}
    >
      <div className={`w-1/4 mb-4`}>
        {isScannerActive && (
          <QrReader
            delay={300}
            onError={handleError}
            onResult={(data) => handleScan(data)}
            style={{ width: "100%" }}
          />
        )}
        <button
          onClick={toggleScanner}
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600`}
        >
          {isScannerActive ? "Turn Off Scanner" : "Turn On Scanner"}
        </button>
      </div>
      {scanResult && (
        <div className="bg-white p-4 rounded shadow-md">
          <p>Scanned Data:</p>
          <p>Name: {scanResult.text}</p>
          <p>Date: {currentDate}</p>
          <p>Time: {currentTime}</p>
        </div>
      )}
    </div>
  );
}

export default QRScanner;
