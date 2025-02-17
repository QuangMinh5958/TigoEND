import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import TitleData from "../../../component/TitleData.js/TitleData";

const DateData = () => {
  const items = [
    {
      id: 1,
      title: "Register",
      number: 50,
      total: 3100,
      status: "increase",
    },
    {
      id: 2,
      title: "Access",
      number: 25,
      total: 2104,
      status: "reduce",
    },
    {
      id: 3,
      title: "Post",
      number: 60,
      total: 7102,
      status: "increase",
    },
    {
      id: 4,
      title: "Comment",
      number: 90,
      total: 5291,
      status: "reduce",
    },
  ];

  return (
    <div>
      <TitleData title={"Now"} />
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4  mt-3">
        {items.map((item) => (
          <div key={item.id} className="w-full bg-itemBg rounded-lg">
            {item.status === "increase" ? (
              <div className="flex flex-col justify-center items-center">
                <div className="w-full">
                  <div className="flex justify-start font-medium text-lg mx-4 mt-2">
                    {item.title}
                  </div>
                </div>
                <div className="max-w-full flex px-4">
                  <Gauge
                    className="w-2/3"
                    width={140}
                    height={140}
                    value={item.number}
                    cornerRadius="50%"
                    sx={() => ({
                      [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 30,
                      },
                      [`& .${gaugeClasses.valueArc}`]: {
                        fill: "rgb(111 177 55)",
                      },
                      [`& .${gaugeClasses.referenceArc}`]: {
                        fill: "transparent",
                      },
                    })}
                  />
                  <div className="w-1/3 flex flex-col justify-start items-center ">
                    <div className="text-base  font-medium text-increase  ">
                      Increase
                    </div>
                    <div className="mt-4">
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        className="text-1xl text-increase"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end mr-4">
                  <span className="font-medium mr-4">Total:</span>
                  <span className="font-medium text-increase">
                    {item.total}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <div className="w-full">
                  <div className="flex justify-start font-medium text-lg mx-4 mt-2">
                    {item.title}
                  </div>
                </div>
                <div className="max-w-full flex px-4">
                  <Gauge
                    className="w-2/3"
                    width={140}
                    height={140}
                    value={item.number}
                    cornerRadius="50%"
                    sx={() => ({
                      [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 30,
                      },
                      [`& .${gaugeClasses.valueArc}`]: {
                        fill: "rgb(255 99 99)",
                      },
                      [`& .${gaugeClasses.referenceArc}`]: {
                        fill: "transparent",
                      },
                    })}
                  />
                  <div className="w-1/3 flex flex-col justify-end items-center ">
                    <div className="mt-4">
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="text-1xl text-reduce"
                      />
                    </div>
                    <div className="text-base  font-medium text-reduce  ">
                      Reduce
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end mr-4">
                  <span className="font-medium mr-4">Total:</span>
                  <span className="font-medium text-reduce">{item.total}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateData;
