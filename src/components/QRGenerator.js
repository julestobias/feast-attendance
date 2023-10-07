import QRCode from "qrcode.react";
import { useState } from "react";

// Components
import Typography from "./Typography";

function QRGenerator() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [qrData, setQRData] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const generateQRCode = () => {
    if (firstName === "" || lastName === "") {
      alert("Please enter First and Last Name");
      return;
    }

    const formattedData = `${firstName} ${lastName}`;

    setQRData(formattedData);
  };

  const clearDetails = () => {
    setQRData("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div
      className={`w-full h-screen flex items-center justify-center bg-white flex-col`}
    >
      <div className={`w-[400px] flex flex-col items-center justify-center`}>
        {qrData && (
          <div
            className={`flex flex-row items-center justify-center w-[800px]`}
          >
            <QRCode value={qrData} size={400} />
          </div>
        )}
        <div className={`mt-5 mb-5 w-full`}>
          <Typography
            label={`First Name`}
            color={`text-black`}
            type={`font-[600] text-[12px]`}
          />
          <input
            placeholder="Enter First Name"
            className={`border-2 border-slate-300 p-1 w-full`}
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className={`mt-5 mb-5 w-full`}>
          <Typography
            label={`Last Name`}
            color={`text-black`}
            type={`font-[600] text-[12px]`}
          />
          <input
            placeholder="Enter Last Name"
            className={`border-2 border-slate-300 p-1 w-full`}
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <button
          className={`bg-blue-700 border border-blue-700 rounded-[4px] p-2 w-full mb-5`}
          onClick={generateQRCode}
        >
          <Typography
            label={`Generate QR`}
            color={`text-black`}
            type={`font-[600] text-[12px]`}
          />
        </button>
        <button
          className={`bg-blue-700 border border-blue-700 rounded-[4px] p-2 w-full mb-5`}
          onClick={clearDetails}
        >
          <Typography
            label={`Clear`}
            color={`text-black`}
            type={`font-[600] text-[12px]`}
          />
        </button>
      </div>
    </div>
  );
}

export default QRGenerator;
