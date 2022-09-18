import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [projectDetails, setProjectDetails] = useState<any>(null);
  useEffect(() => {
    try {
    } catch (e) {
      console.log(e);
    }
  }, []);

  return <div>ProfilePage</div>;
};

export default ProfilePage;
