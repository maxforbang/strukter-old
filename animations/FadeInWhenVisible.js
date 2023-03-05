import {motion} from 'framer-motion'

export function FadeInWhenVisible(props) {
	const {
		children,
		duration = 0.7,
	} = props

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: duration }}
			variants={{
				hidden: { opacity: 0, scale: 1},
				visible: { opacity: 1, scale: 1},
			}}
		>
			{children}
		</motion.div>
	);
}

export function FadeInWhenVisibleHorizontal(props) {
	const {
		children,
		initial = 0,
		duration = 0.7,
	} = props

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: duration }}
			variants={{
				hidden: { opacity: 0, scale: 1, x: initial},
				visible: { opacity: 1, scale: 1, x: 0 },
			}}
		>
			{children}
		</motion.div>
	);
}

export function FadeInWhenVisibleVertical(props) {
	const {
		children,
		initial = 0,
		duration = 0.7,
	} = props

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: duration }}
			variants={{
				hidden: { opacity: 0, scale: 1, y: initial},
				visible: { opacity: 1, scale: 1, y: 0 },
			}}
		>
			{children}
		</motion.div>
	);
}