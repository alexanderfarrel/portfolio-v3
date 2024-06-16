export default function Span({ children, className, isInView }) {
  return (
    <span
      className={`${
        isInView ? "opacity-100" : "opacity-50"
      } ${className} transition-all duration-700`}
    >
      {children}
    </span>
  );
}
