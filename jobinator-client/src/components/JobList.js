import React, { useEffect, useContext, useState } from "react";
import { Text, View, Button, ScrollView } from "react-native";

import { ContextJob } from "../context/storeJob";
import { ContextAuth } from "../context/storeAuth";
import JobItem from "./JobItem";
export default function JobList({ navigation }) {
  const { stateAuth } = useContext(ContextAuth);
  const { stateJob, dispatchJob } = useContext(ContextJob);
  const [listJob, setListJob] = useState([]);

  useEffect(() => {
    const d = stateJob.job.map((job) => {
      return <JobItem key={job.id} job={job} navigation={navigation} />;
    });
    setListJob(d);
  }, [stateJob, dispatchJob]);

  return (
    <View>
      <Text>JOB LIST</Text>
      <ScrollView style={{ height: "90%" }}>{listJob}</ScrollView>
      {stateAuth.user.status == "entreprise" ? (
        <Button
          title="New Job"
          onPress={() => {
            navigation.navigate("NewJob");
          }}
        />
      ) : (
        <Text></Text>
      )}
    </View>
  );
}
