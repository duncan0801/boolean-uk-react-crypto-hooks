import { useEffect, useState } from "react";
import { STATUS_UPDATES } from "../constants";
import useFetchStatusUpdatesAndAddToState from "../hooks/useFetchStatusUpdatesAndAddToState";
import NewsCard from "./NewsCard";

export default function NewsFeed() {
  const [newsList, setNewsList] = useFetchStatusUpdatesAndAddToState(STATUS_UPDATES)

  // You can turn this into a custom hook////////////////////
  // useFetchStatusUpdatesAndAddToState(STATUS_UPDATES)

  // useEffect(
  //   () =>
  //     fetch(STATUS_UPDATES)
  //       .then((resp) => {
  //         resp.json()
  //       debugger
  //     } )
  //       .then(({ status_updates }) => setNewsList(status_updates)),
  //   [setNewsList]
  // );
  ///////////////////////////////////////////////////////////

  return (
    <ul className="newsfeed">
      {newsList.map((newsItem) => (
        <li>
          <NewsCard newsItem={newsItem} />
        </li>
      ))}
    </ul>
  );
}
