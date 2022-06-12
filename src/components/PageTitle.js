import React from "react";

function PageTitle({ title }) {
  return (
    <div className="title__container">
      <h2 className="page__title"> {title} </h2>
    </div>
  );
}

export default PageTitle;
