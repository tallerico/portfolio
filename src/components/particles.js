import React from 'react';
import Particles from 'react-particles-js';

function particles() {
	return (
		<Particles
			params={{
				particles: {
					number: {
						value: 96,
						density: {
							enable: true,
							value_area: 800,
						},
					},
					color: {
						value: '#fff',
					},
					shape: {
						type: 'circle',
						stroke: {
							width: 0,
							color: '#000000',
						},
						polygon: {
							nb_sides: 5,
						},
					},
					opacity: {
						value: 1,
						random: false,
						anim: {
							enable: false,
							speed: 0.324593649325251,
							opacity_min: 0.1,
							sync: false,
						},
					},
					size: {
						value: 0,
						random: false,
						anim: {
							enable: false,
							speed: 40,
							size_min: 0.1,
							sync: false,
						},
					},
					line_linked: {
						enable: true,
						distance: 128.19177489524316,
						color: '#a0a2ac',
						opacity: 0.4646951839952565,
						width: 0.6409588744762158,
					},
					move: {
						enable: true,
						speed: 6,
						direction: 'none',
						random: false,
						straight: false,
						out_mode: 'out',
						bounce: false,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200,
						},
					},
				},
				interactivity: {
					detect_on: 'canvas',
					events: {
						onhover: {
							enable: true,
							mode: 'bubble',
						},
						onclick: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 400,
							line_linked: {
								opacity: 0.5,
							},
						},
						bubble: {
							distance: 400,
							size: 4,
							duration: 0.3,
							opacity: 1,
							speed: 3,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
						push: {
							particles_nb: 4,
						},
						remove: {
							particles_nb: 2,
						},
					},
				},
				retina_detect: true,
			}}
			style={{
				width: '100vw',
				height: '100vh',
			}}
		/>
	);
}

export default particles;
