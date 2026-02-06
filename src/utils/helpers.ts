export const isISOString = (val: any) => {
  // Check if input is a string
  if (typeof val !== "string") {
    return false;
  }
  // Check if string is empty
  if (val.trim() === "") {
    return false;
  }

  try {
    // Create a Date object from the input string
    const d = new Date(val);

    // Check if the date is valid and if the ISO string matches the original
    // TODO: add later when Vikas add timezone to ISOstring
    // return !Number.isNaN(d.valueOf()) && d.toISOString() === val;

    return !Number.isNaN(d.valueOf());
  } catch (error: any) {
    console.error(error);
    // If any error occurs during validation, return false
    return false;
  }
};
