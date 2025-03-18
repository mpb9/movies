export function handleError(err, callback = null) {
  if (callback) {
    console.log("callback! - not implemented");
    throwError(err);
  } else {
    throwError(err);
  }
}
export function handleCustomError(err, msg, callback = null) {
  if (callback) {
    console.log("callback! - not implemented");
    throwError(err);
  } else {
    throwError(err);
  }
}

function throwError(err) {
  if (err instanceof Error) {
    console.error("User-specified error:", err.message);
  } else {
    console.error("Unexpected error:", err);
  }
}
