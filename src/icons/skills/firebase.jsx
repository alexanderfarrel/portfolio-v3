import PropTypes from "prop-types";

export default function Firebase({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M6.75651 1.50129L4 18.4998L4.00007 18.4998L9.47342 4.81645L7.69485 1.35292C7.47439 0.923595 6.83377 1.02489 6.75651 1.50129ZM11.5638 4.31793L4.00008 18.4998L4.00012 18.4999L13.8396 6.94912L12.4412 4.32699C12.2546 3.9771 11.7558 3.97408 11.5638 4.31793ZM10.94 22.8373L4.00013 18.4999L17.31 5.66535C17.6037 5.39537 18.0834 5.56273 18.1424 5.96076L20 18.4998L13.06 22.8373C12.4115 23.2426 11.5885 23.2426 10.94 22.8373Z"></path>
    </svg>
  );
}

Firebase.propTypes = {
  className: PropTypes.string,
};
