import "./BusLine.css";

interface Props {
  busLine: {
    line: number;
    amountOfStops: number;
    stops: {
      name: string;
    }[];
  };
}

export const BusLine = ({ busLine }: Props) => {
  return (
    <div>
      <div className="BusLine_header">
        Line: {busLine.line} Stops: {busLine.amountOfStops}
      </div>
      <div>
        {busLine.stops.map((stop) => {
          return <div className="BusLine_stopName">{stop.name}</div>;
        })}
      </div>
    </div>
  );
};
