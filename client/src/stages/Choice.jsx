import React from "react";
import { Button } from "../components/Button";
import { usePlayer } from "@empirica/core/player/classic/react";
import parkingImg from "../components/payoffs.png";
export function Choice() {
  const player = usePlayer();

  function onClick(choice) {
    player.round.set("decision", choice);
    player.stage.set("submit", true);
  }

  return (
    <div>
      <h2>There are 4 spots in the parking lot, 2 orange and 2 purple. </h2>
      <img
        src={parkingImg}
        className="mx-auto my-4 w-64 rounded-md shadow-md"
      />
      <ul className="list-disc list-inside">
        <li>
          The baseline cost for each parking spot is written on the diagram above.
        </li>
        <li>
          If you both select the same spot, your cost will <strong>increase by 10 points</strong>.
        </li>
        <li>
          If you both select different spots of the same color, your cost will be <strong>reduced by 10 points</strong>.
        </li>

      </ul>
      <br />
      <p>Where do you want to park?</p>

      <div className="flex justify-center">
        <Button className="m-5" handleClick={() => onClick("A")}>
          A
        </Button>
        <Button className="m-5" handleClick={() => onClick("B")}>
          B
        </Button>
        <Button className="m-5" handleClick={() => onClick("C")}>
          C
        </Button>
        <Button className="m-5" handleClick={() => onClick("D")}>
          D
        </Button>
      </div>
    </div>
  );
}
