import React, { useEffect } from "react";
import { dataGlosario } from "../dataGlosario";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function Definition() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  let query = useParams();
  const word = dataGlosario.find((word) => word.urlName == query.urlName);
  const metadescription = word.content.replace(/(<([^>]+)>)/gi, "");

  if (word) {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{word.term} - Glosario de Marketing Digital</title>
          <meta name="description" content={metadescription} />
        </Helmet>
        <div className="definitionBody">
          <h2>{word.term}</h2>
          <div dangerouslySetInnerHTML={{ __html: word.content }} />
        </div>
      </div>
    );
  } else {
    return <p>Not found</p>;
  }
}

export default Definition;
