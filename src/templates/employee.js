import React from "react";
import Layout from "../components/Layout";
import ImageBox from "../components/ImageBox";

export const EmployeeTemplate = ({ name, title, avatar }) => {
  return <ImageBox height={340} title={name} subtitle={title} image={avatar} />;
};

const Employee = ({ data }) => {
  return (
    <Layout>
      <EmployeeTemplate />
    </Layout>
  );
};

export default Employee;
