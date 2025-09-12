import { Sidebar } from './Sidebar/Sidebar.jsx';
import { CenterPanel } from './Display/CenterPanel.jsx';
import { Video } from './Sidebar/Video.jsx';
import { Loader } from '../Loader.jsx';
import { getMediaFilePath } from './lib/media_utils';
import { setupTextSync } from './lib/sync';


export class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = { story: null };
    }

    componentDidMount() {
        import(`~./data/json_files/${this.props.storyID}.json`)
            .then((storyJSON) => {
                this.setState({ story: storyJSON.default }, () => {
                    setupTextSync(); // run after story is set
                });
            })
            .catch((err) => {
                console.error("Error loading story JSON:", err);
            });
    }

    render() {
        if (!this.state.story) {
            return <Loader />;
        }

        const story = this.state.story;
        const sentences = story['sentences'];
        const timed = story['metadata']['timed'];
        let footer = null;

        if (timed) {
            const { audio, video } = story['metadata']['media'];

            footer = (
                <div id="footer">
                    {audio && (
                        <audio
                            data-live="true"
                            controls
                            controlsList="nodownload"
                            id="audio"
                            src={getMediaFilePath(audio)}
                        />
                    )}
                    {video && video.endsWith('.mp4') && (
                        <Video path={getMediaFilePath(video)} />
                    )}
                </div>
            );
        }

        return (
            <div>
                <div id="middle">
                    <Sidebar metadata={story['metadata']} />
                    <CenterPanel timed={timed} sentences={sentences} metadata={story['metadata']} />
                </div>
                {footer}
            </div>
        );
    }
}