import React from 'react';

export class Video extends React.Component {
	// I/P: path = direct URL to .mp4 file
	render() {
		return (
			<video
				src={this.props.path}
				id="video"
				controls
				controlsList="nodownload"
				data-live="true"
				preload="metadata"
				poster=""                         // no still image preview
				style={{ display: 'none', width: '100%' }}  // hidden by default
			/>
		);
	}

	static show() {
		const extraHeight = 88;
		const bodyHeight = `calc(100% - ${extraHeight}px)`;

		$('#leftPanel').css({ width: '40%', height: bodyHeight });
		$('#centerPanel').css({ marginLeft: '40%', width: '60%', height: bodyHeight });

		const $video = $('#video');
		$video.css('display', 'block');   // 👈 show when needed

		const audio = document.getElementById('audio');
		const video = document.getElementById('video');

		if (audio && video) {
			if (!audio.paused) {
				audio.pause();
				video.play();
			}
			video.currentTime = audio.currentTime;
		}
	}

	static hide() {
		const extraHeight = 128;
		const bodyHeight = `calc(100% - ${extraHeight}px)`;

		$('#leftPanel').css({ width: '300px', height: bodyHeight });
		$('#centerPanel').css({ marginLeft: '300px', width: 'calc(100% - 300px)', height: bodyHeight });

		$('#video').css('display', 'none');   // 👈 hide again

		const audio = document.getElementById('audio');
		const video = document.getElementById('video');

		if (audio && video) {
			if (!video.paused) {
				video.pause();
				audio.play();
			}
			audio.currentTime = video.currentTime;
		}
	}
}
