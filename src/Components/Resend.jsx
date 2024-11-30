import ResendInputSvg from "../SVG/ResendInput";

const Resend = ({ reSend }) => {
  return (
    <button
      onClick={() => {
        reSend();
      }}
    >
      <div className="bg-input p-2 m-2 rounded-3xl flex  ">
        <div className="w-full text-white text-xl  ps-4">
          <h4>Resend</h4>
        </div>
        <div>
          <div className={"rounded-full bg-white ms-2"}>
            <ResendInputSvg />
          </div>
        </div>
      </div>
    </button>
  );
};

export default Resend;
