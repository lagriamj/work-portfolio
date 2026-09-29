const SectionHeading = ({ index, label, title }) => {
  return (
    <div>
      <p className="section-label">
        {index} — {label}
      </p>
      {title ? <h2 className="heading mt-3 text-[1.3rem]">{title}</h2> : null}
    </div>
  );
};

export default SectionHeading;
