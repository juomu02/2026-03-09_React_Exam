import axios from "axios";
import MemberCard from "./MemberCard";
import "../../App.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router";

const API_URL = import.meta.env.VITE_API_URL;

export default function MembersListPage() {
  const [members, setMembers] = useState(null);

  useEffect(() => {
    const getMembersData = async () => {
      const response = await axios.get(`${API_URL}`);
      const sortedResult = response.data.sort((a, b) =>
        a.lastName.localeCompare(b.lastName),
      );
      setMembers(sortedResult);
    };
    getMembersData();
  }, []);

  if (!members) {
    return (
      <div className="members-grid">
        Klaida atnaujinant sąrašą. json-server portas turi būt 3000
      </div>
    );
  }

  return (
    <>
      <Outlet />
      <div className="members-grid">
        {members.map((member) => {
          return <MemberCard member={member} key={member.id} />;
        })}
      </div>
    </>
  );
}
