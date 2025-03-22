import PropTypes from "prop-types";

// allow the props thru NavLink via the URL?
Jsonified.propTypes = {
  docs: PropTypes.object.isRequired,
};
export default function Jsonified({ docs = [] }) {
  // ! havent really started on this page yet
  // info: this page will show the http response of a request for (primarily) GET allByX requests
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <h1 className="text-3xl">HttpResponse</h1>
      <pre className="text-sm text-left whitespace-pre-wrap">
        {JSON.stringify(docs, null, 2)}
      </pre>
    </div>
  );
}
