/*
 * File: DefaultImage.js
 * Functionality: A default image is produced for every user if they do not upload an image
 * Author: Jose
 */

// (if image URL empty) Creates a default logo with the First Letter of the User's Name
export const defaultImage = (name) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  // declares canvas size
  canvas.width = canvas.height = 80;
  // creates circl within canvas
  context.strokeStyle = "#2b2b2b";
  context.fillStyle = "rgba(43, 43, 43, 1)";
  context.lineWidth = 2;
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, 30, 0, 2 * Math.PI);
  context.stroke();
  context.fill();

  // adds the first letter of the user's first name within the circle
  context.fillStyle = "#fff";
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.font = `${2}rem Roboto`;
  context.fillText(name.charAt(0), canvas.width / 2, canvas.height / 2);

  // returns base64 string for the above canvas
  return canvas.toDataURL();
};
