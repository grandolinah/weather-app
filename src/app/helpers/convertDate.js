const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

export const convertDate = (date) =>  new Date(date * 1000).toLocaleDateString('en-EN', DATE_OPTIONS );
