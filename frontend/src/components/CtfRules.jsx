import React from 'react'

const CtfRules = () => {
  return (
    <div className="bg-customPurple text-white py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Rules</h2>
        <ul className="list-disc max-w-2xl mx-auto px-8">
          <li>Each team can have a minimum of 2 and a maximum of 4 members.</li>
          <li>
            Each team should have one team leader, who will be responsible for
            coordinating tasks and ensuring adherence to the rules.
          </li>
          <li>
            Do not share any hints or answers with other teams. Disrespect or
            rule violations will result in disqualification.
          </li>
          <li>
            We expect all team members to be present at the team checkpoints to
            avoid delays in the progress of the event.
          </li>
        </ul>
      </div>
  )
}

export default CtfRules