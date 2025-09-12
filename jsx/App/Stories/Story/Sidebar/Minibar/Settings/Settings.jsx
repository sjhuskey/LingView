import { TierCheckboxList } from './TierCheckboxList.jsx';
import { Video } from '~./jsx/App/Stories/Story/Sidebar/Video.jsx';
import { showVideoButtonText } from '~./jsx/App/locale/LocaleConstants.jsx';
import { TranslatableText } from '~./jsx/App/locale/TranslatableText.jsx'

class VideoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxState: false   // start with video hidden
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => {
      const newState = !prevState.checkboxState;
      if (newState) {
        Video.show();
      } else {
        Video.hide();
      }
      return { checkboxState: newState };
    });
  }

  render() {
    return (
      <div id="videoButton">
        <input
          type="checkbox"
          onClick={this.toggle}
          checked={this.state.checkboxState}
          readOnly
        />
        <label>
          <TranslatableText dictionary={showVideoButtonText} />
        </label>
      </div>
    );
  }
}


export function Settings({ tiers, hasVideo }) {
	// I/P: tiers, a hashmap from tier name to a boolean indicating whether the tier is subdivided
	//      hasVideo, a boolean
	// O/P: checkboxes that show/hide tiers and the video when clicked
  let videoButton = null;
  if (hasVideo) {
    videoButton = <VideoButton />;
  }

	return (
		<div id="settings" className="miniPage">
			<TierCheckboxList tiers={tiers} />
			{videoButton}
		</div>
	);
}
