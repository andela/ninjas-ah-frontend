const TimeStamp = ({ time }) => {
  const months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];
  const d = (time || '').split('-');
  const created = `${months[d[1] - 1]} ${(d[2] || '').split('T')[0]}, ${d[0]}`;
  return created;
};

export default TimeStamp;
