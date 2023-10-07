import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import Typography from "./Typography";

function Login() {
  const navigate = useNavigate();

  return (
    <div className={`h-screen w-full flex items-center justify-center`}>
      <div
        className={`border-2 border-blue-800 rounded-[4px] p-5 flex flex-col items-center justify-center w-[400px]`}
      >
        <Typography
          label={`FEAST ORTIGAS`}
          color={`text-red-400`}
          type={`font-[800] text-[20px] mb-5 mt-5`}
        />
        <div className={`mt-5 mb-5 w-full`}>
          <Typography
            label={`Email Address`}
            color={`text-black`}
            type={`font-[600] text-[12px]`}
          />
          <input
            placeholder="example@mail.com"
            className={`border-2 border-slate-300 p-1 w-full`}
          />
        </div>
        <div className={`mb-5 w-full`}>
          <Typography
            label={`Password`}
            color={`text-black`}
            type={`font-[600] text-[12px]`}
          />
          <input
            placeholder="*********"
            className={`border-2 border-slate-300 p-1 w-full`}
          />
        </div>
        <div
          className={`w-full flex flex-items-center justify-center text-center mb-5 mt-5`}
        >
          <button
            className={`bg-blue-700 border border-blue-700 rounded-[4px] p-2 w-full`}
            onClick={() => navigate("/")}
          >
            <Typography
              label={`Log In`}
              color={`text-slate-50`}
              type={`font-[500] text-[14px]`}
            />
          </button>
        </div>
        <button>
          <Typography
            label={`Reset Password`}
            color={`text-blue-700`}
            type={`font-[500] text-[14px]`}
          />
        </button>
      </div>
    </div>
  );
}

export default Login;
