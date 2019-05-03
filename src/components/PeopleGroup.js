import React from "react";
import ImageBox from "./ImageBox";

export default function PeopleGroup({ name, people }) {
  console.log(people);
  return (
    <div className="people-group">
      {name && <h2>{name}</h2>}
      <div className="container">
        <div className="columns is-multiline">
          {people.map(i => (
            <div key={i} className="column is-3 work-item">
              <ImageBox
                height={340}
                title="Christian Risom"
                subtitle="Employee title"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
