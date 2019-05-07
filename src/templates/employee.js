import React from "react";
import Layout from "../components/Layout";

export const EmployeeTemplate = () => {
  return <section className="section" />;
};

const Employee = ({ data }) => {
  return (
    <Layout>
      <EmployeeTemplate />
    </Layout>
  );
};

export default Employee;
