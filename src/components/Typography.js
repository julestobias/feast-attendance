import PropTypes from "prop-types";

function Typography({ label, color, type }) {
  return (
    <div>
      <p className={`${color} ${type}`}>{label}</p>
    </div>
  );
}

Typography.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string
};

Typography.defaultProps = {
  label: "",
  color: "",
  type: ""
};

export default Typography;
