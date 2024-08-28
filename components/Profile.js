"use client";
import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();

  if (!session.data) {
    return (
      <div>
        <p>No User Found!</p>
      </div>
    );
  }
  return <div>User found with name {session.data.user.name}</div>;
};

export default Profile;
