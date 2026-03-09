import { useState, useEffect } from "react";
import { getAllData } from "../../services/get";

const API_URL = import.meta.env.VITE_API_URL;

export default function MemberStats() {
  const [members, setMembers] = useState(null);

  const fetchMembers = async () => {
    const membersList = await getAllData();
    setMembers(membersList);
  };

  useEffect(() => {
    const getData = async () => {
      await fetchMembers();
    };
    getData();
  }, []);

  if (!members) {
    return;
  }
  const calcMemberStats = () => {
    let membStats = {
      registeredUsers: 0,
      basicUsers: 0,
      premiumUsers: 0,
      vipUsers: 0,
    };

    members.forEach((member) => {
      const regUsers = ++membStats.registeredUsers;
      const basUsers =
        member.membershipType === "Basic"
          ? ++membStats.basicUsers
          : membStats.basicUsers;
      const premUsers =
        member.membershipType === "Premium"
          ? ++membStats.premiumUsers
          : membStats.premiumUsers;
      const vpUsers =
        member.membershipType === "VIP"
          ? ++membStats.vipUsers
          : membStats.vipUsers;

      membStats.registeredUsers = regUsers;
      membStats.basicUsers = basUsers;
      membStats.premiumUsers = premUsers;
      membStats.vipUsers = vpUsers;
    });
    return membStats;
  };

  const memberStatistics = calcMemberStats();

  return (
    <>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
            />
          </div>
          <div>
            <div>Registruotų narių skaičius:</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {memberStatistics.registeredUsers}
            </div>
          </div>
        </li>
        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
            />
          </div>
          <div>
            <div>Basic plan narių skaičius:</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {memberStatistics.basicUsers}
            </div>
          </div>
        </li>
        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
            />
          </div>
          <div>
            <div>Premiun plan narių skaičius:</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {memberStatistics.premiumUsers}
            </div>
          </div>
        </li>
        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
            />
          </div>
          <div>
            <div>VIP plan narių skaičius:</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {memberStatistics.vipUsers}
            </div>
          </div>
        </li>
      </ul>

      <button className="btn btn-soft btn-success">
        Registruoti naują vartotoją
      </button>
    </>
  );
}
