const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

export const convertDate = (date) => new Date(date * 1000).toLocaleDateString('en-EN', DATE_OPTIONS );

export const getDate = (date) => {
  const currDate = new Date(date * 1000);

  return currDate.getDate();
};

export const convertTime = (time) => {
    const date = new Date(time * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
};
