import React from "react";
import { useParams, Route } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_DATA = [
  {
    id: "q1",
    author: "Jony",
    text: "Learning React",
  },
  {
    id: "q2",
    author: "Jonathan",
    text: "Learning React (half-way)",
  },
];

const QuoteDetails = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <React.Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetails;
