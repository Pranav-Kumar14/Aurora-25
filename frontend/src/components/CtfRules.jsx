import { LineChart } from 'lucide-react';
import React from 'react';
import line from "../images/tgline.png";

const teamRules = [
  "Each team can have a minimum of 2 and a maximum of 4 members.",
  "Each team should have one team leader, who will be responsible for coordinating tasks and ensuring adherence to the rules.",
  "Do not share any hints or answers with other teams. Disrespect or rule violations will result in disqualification.",
  "We expect all team members to be present at the team checkpoints to avoid delays in the progress of the event.",
];

const CtfRules = () => {
  return (
    <div className="bg-customPurple text-white py-12">
      <h2 className="font-heading text-center lg:text-3xl text-3xl">Rules</h2>
      <img className="ml-auto mr-auto " src={line} alt="line" />
      <div className="max-w-4xl mx-auto px-8 pt-10 pb-11">
        <ul className="list-disc space-y-4  lg:text-lg mx-auto text-center">
          {teamRules.map((rule, index) => (
            <ul key={index}>{rule}</ul>
          ))}
          <img className="ml-auto mr-auto" src={line} alt="line" />
        </ul>
      </div>
    </div>
  );
};

export default CtfRules;
