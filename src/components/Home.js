import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import Typography from "./Typography";

// Assets
const QRScan = "/icons/qr-scan.png";
const QRGenerate = "/icons/qr-code.png";
const Attendance = "/icons/attendance.png";
const Logout = "/icons/logout.png";
const FeastLogo = "/images/feast-timog-logo.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={`h-screen w-full flex items-center justify-center`}>
      <div
        className={`w-auto border-blue-500 border-[2px] p-5 flex flex-col items-center justify-center`}
      >
        <img
          src={FeastLogo}
          alt={`Blue QR Scanner Icon`}
          width={280}
          height={280}
        />
        <div className={`flex items-center justify-center`}>
          <button
            className={`w-[300px] h-[300px] bg-blue-50 rounded-[20px] m-5 flex flex-col items-center justify-center`}
            onClick={() => navigate("/scan")}
          >
            <img
              src={QRScan}
              alt={`Blue QR Scanner Icon`}
              width={150}
              height={150}
            />
            <Typography
              label={`Scan QR`}
              color={`text-blue`}
              type={`font-[600] text-[16px] mt-[40px]`}
            />
          </button>
          <button
            className={`w-[300px] h-[300px] bg-blue-50 rounded-[20px] m-5 flex flex-col items-center justify-center`}
            onClick={() => navigate("/generate")}
          >
            <img
              src={QRGenerate}
              alt={`Blue QR Scanner Icon`}
              width={150}
              height={150}
            />
            <Typography
              label={`Generate QR`}
              color={`text-black`}
              type={`font-[600] text-[16px] mt-[40px]`}
            />
          </button>
        </div>
        <div className={`flex flex-row items-center justify-center`}>
          <button
            className={`w-[300px] h-[300px] bg-blue-50 rounded-[20px] m-5 flex flex-col items-center justify-center`}
          >
            <img
              src={Attendance}
              alt={`Blue QR Scanner Icon`}
              width={150}
              height={150}
            />
            <Typography
              label={`Attendance`}
              color={`text-black`}
              type={`font-[600] text-[16px] mt-[40px]`}
            />
          </button>
          <button
            className={`w-[300px] h-[300px] bg-blue-50 rounded-[20px] m-5 flex flex-col items-center justify-center`}
            onClick={() => navigate("/login")}
          >
            <img
              src={Logout}
              alt={`Blue QR Scanner Icon`}
              width={150}
              height={150}
            />
            <Typography
              label={`Logout`}
              color={`text-black`}
              type={`font-[600] text-[16px] mt-[40px]`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
