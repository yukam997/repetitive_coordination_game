import React from "react";
import { Button } from "../components/Button";

export function Introduction({ next }) {
  return (
    <div className="mt-3 sm:mt-5 p-20">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Instruction One
      </h3>
      <div className="mt-2 mb-6">
        <p>
          In this experiment, you will play a car parking game with another participant. Your task is to choose where to park your car, but <strong>each parking spot has a different cost</strong>. Additionally, the cost of the parking spot also depends on where your partner parked:
        </p>
        <p>1. If you and your partner park in the <strong>same spot</strong>, you will incur <strong>a penalty cost of 30.</strong></p>
        <p>2. If you and your partner park in different spots of the <strong>same color</strong>, you will receive <strong>a group discount of 10.</strong></p>
        <p>The bonus payment for this experiment depends on the total cost across all rounds in the game. This will be calculated based on this equation:</p>
        <p> <strong>$5 – (total cost)*$0.01 </strong></p>
        <p>In other words, your goal is to <strong>minimize the total cost</strong> you pay in this parking game.</p>

      </div>
      <Button handleClick={next} autoFocus>
        <p>Next</p>
      </Button>
    </div>
  );
}
