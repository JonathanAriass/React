import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA}></QuoteList>;
};

export default AllQuotes;
