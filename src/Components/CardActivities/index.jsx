const CardActivities = ({ activities }) => {
  return (
    <section>
      <h3>{activities.title}</h3>
      <span>{activities.realization_time}</span>
      <span>{activities.group}</span>
    </section>
  );
};

export default CardActivities;
