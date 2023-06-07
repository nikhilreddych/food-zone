
import "./ToggleSwitch.css";

const ToggleSwitch = ({ label, onToggleChange }) => {
return (
	<div className="container">
	{label}{" "}
	<div className="toggle-switch">
		<input type="checkbox" className="checkbox"
			name={label} id={label} onChange={(e) => {
                onToggleChange(e.target.checked);
            }}/>
		<label className="label" htmlFor={label}>
		<span className="inner" />
		<span className="switch" />
		</label>
	</div>
	</div>
);
};

export default ToggleSwitch;
