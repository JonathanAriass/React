// This Wrapper component helps us figth the <div> soup that can form on the DOM
// The <React.fragment> serves the same purpose as the Wrapper so we don't need to create this Wrapper.js component

const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
