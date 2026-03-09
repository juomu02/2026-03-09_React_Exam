import { Link } from "react-router";

const API_URL = import.meta.env.VITE_API_URL;

export default function MemberCard({ member }) {
  return (
    <>
      <div className="card bg-base-100 w-96 h-96 overflow-hidden shadow-sm">
        <div className="card-body items-center">
          <h2 className="card-title items-center">
            {member.firstName} {member.lastName}
          </h2>
          <p>Amžius: {member.age}</p>
          <p>Planas: {member.membershipType}</p>
          <p>Tikslai: {member.trainingGoal}</p>
          <div className="card-actions justify-center">
            <Link to={`/memberslist/${member.id}`} className="btn btn-info">
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

//   return <>tst</>;
// }
