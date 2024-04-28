import React from "react";
import SkyshareLogo from "../../public/images/Skyshare-Logo.png";

function SkyshareCta() {
  return (
    <>
      <div className="hero bg-hero-bg bg-cover bg-center flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
        <div className="content text-white flex justify-center items-end">
          <div className="w-2/3">
            <div className="flex justify-center">
              <img className="w-56" src={SkyshareLogo} alt="" />
            </div>
            <h1 className="text-white headline-1 text-center mb-4">
              Skyshare Academy
            </h1>
            <p className="paragraph text-center mb-3">
              Open registration Skyshare Academy Season 6.
            </p>
            <div className="flex justify-center">
              <div className=" w-1/2 flex justify-center">
                <a
                  className=" bg-primary-1 hover:bg-primary-2 px-6 rounded-xl py-5 flex items-center"
                  href=""
                >
                  <h3 className="headline-3">Join #Season6</h3>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" inline ml-2"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.749 13.3037L3.24926 13.3037L3.24926 11.8037L20.749 11.8037L20.749 13.3037Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.9994 11.8037C16.4718 11.8037 13.5894 14.9059 13.5894 18.2138L13.5894 18.9638L15.0894 18.9638L15.0894 18.2138C15.0894 15.7022 17.332 13.3037 19.9994 13.3037L20.7494 13.3037L20.7494 11.8037L19.9994 11.8037Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.9994 13.3037C16.4718 13.3037 13.5894 10.2016 13.5894 6.89366L13.5894 6.14366L15.0894 6.14366L15.0894 6.89366C15.0894 9.40524 17.332 11.8037 19.9994 11.8037L20.7494 11.8037L20.7494 13.3037L19.9994 13.3037Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkyshareCta;
