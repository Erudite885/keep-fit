import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState("frontend developer");
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  const youtubeSearchUrl = "https://jsearch.p.rapidapi.com";

  const exerciseVideosData = fetchData(
    `${youtubeSearchUrl}/search?query=frontend+developer`
  );
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });

  // const fetchExercisesData = async () => {
  //   const exerciseDbUrl = "https://jsearch.p.rapidapi.com";
  //   const youtubeSearchUrl = 'https://jsearch.p.rapidapi.com';

  // const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
  // setExerciseDetail(exerciseDetailData);

  // const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=frontend+developer`);
  // setExerciseVideos(exerciseVideosData.contents);

  //   const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
  //   setTargetMuscleExercises(targetMuscleExercisesData);

  //   const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
  //   setEquipmentExercises(equimentExercisesData);
  // };

  //   fetchExercisesData();
  // }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;
  console.log(exerciseVideosData || "nothing");

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
