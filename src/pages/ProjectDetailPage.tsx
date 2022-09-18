import React, { useContext, useEffect, useState } from "react";
import { ProjectDetailsContext } from "../services/ProjectDetails/ProjectDetails.context";
import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
  const params = useParams();

  const ProjectDetails = useContext(ProjectDetailsContext);

  useEffect(() => {
    const fetchItem = async () => {
      if (params.id) {
        ProjectDetails?.FetchProjectDetails(params.id);
      }
    };
    fetchItem();
  }, [params.id, ProjectDetails]);

  return <div>ProjectDetailPage</div>;
};

export default ProjectDetailPage;
