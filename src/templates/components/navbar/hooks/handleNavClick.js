export default function handleNavClickFnc(path, handleClickHamburger) {
  if (path?.length > 0 && window?.location?.pathname !== path) {
    handleClickHamburger();
    window.location.href = path;
  }
  const time = setTimeout(() => {
    handleClickHamburger();
  }, 300);
  return () => clearTimeout(time);
}
