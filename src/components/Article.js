// src/components/Article.js
import React from "react";

function Article({ title, date, preview, minutes }) {
  const defaultDate = "January 1, 1970";

  // Minutes to Read logic
  const getReadTime = (minutes) => {
    if (typeof minutes !== "number") return "";
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      const emoji = "☕️".repeat(coffeeCups);
      return `${emoji} ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      const emoji = "🍱".repeat(bentoBoxes);
      return `${emoji} ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <div>
        <small>{date || defaultDate}</small>
        {minutes !== undefined && (
          <>
            {" • "}
            <small>{getReadTime(minutes)}</small>
          </>
        )}
      </div>
      <p>{preview}</p>
    </article>
  );
}

export default Article;