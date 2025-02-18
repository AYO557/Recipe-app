export default function handleError(
  msg,
  setError,
  setIsDisabled,
  setIsLoading
) {
  setError(msg);
  setTimeout(() => {
    setError(null);
  }, 2000);

  setIsDisabled(false);
  setIsLoading(false);
}
