function FakePromise({ email, pass }) {
  const delay = (0.7 + Math.random() * 2) * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (pass === "password" && email === "alok@abhi.com") {
        resolve();
      } else {
        reject(new Error("Something is FISHYYYY"));
      }
    }, delay);
  });
}
export default FakePromise;
