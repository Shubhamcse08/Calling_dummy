
import CallControls from "./Part3";
import "./Ui.css";
import Part1 from "./Part1"

export default function Ui() {
	return (
		<div className="ui-center-container">
			<div className="ui-box">
				<div className="ui-part-1">
                    <Part1/>
                </div>
				
				<div className="ui-part-3">
                    <CallControls/>
                </div>
			</div>
		</div>
	);
}
