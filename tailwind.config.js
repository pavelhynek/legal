/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				inter: ['"Inter"', 'system-ui', '-apple-system'],
			},
			fontSize: {
				hidden: [
					'0',
					{
						letterSpacing: '0',
						lineHeight: '0',
					},
				],
				'3xs': [
					'.625rem',
					{
						letterSpacing: '.01rem',
						lineHeight: '1rem',
					},
				],
				'2xs': [
					'.75rem',
					{
						lineHeight: '1rem',
					},
				],
				xs: [
					'.875rem',
					{
						letterSpacing: '-0.003rem',
						lineHeight: '1.5rem',
					},
				],
				sm: [
					'.9375rem',
					{
						letterSpacing: '-0.008rem',
						lineHeight: '1.625rem',
					},
				],
				base: [
					'1rem',
					{
						letterSpacing: '-0.016rem',
						lineHeight: '1.75rem',
					},
				],
				lg: [
					'1.125rem',
					{
						letterSpacing: '-0.019rem',
						lineHeight: '1.875rem',
					},
				],
				xl: [
					'1.375rem',
					{
						letterSpacing: '-0.0269rem',
						lineHeight: '2rem',
					},
				],
				'2xl': [
					'1.75rem',
					{
						letterSpacing: '-0.031rem',
						lineHeight: '2.5rem',
					},
				],
				'3xl': [
					'32px',
					{
						letterSpacing: '-0.4px',
						lineHeight: '38px',
					},
				],
				'4xl': [
					'2.75rem',
					{
						letterSpacing: '-0.0781rem',
						lineHeight: '3.75rem',
					},
				],
			},
		},
	},
};