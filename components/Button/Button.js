const Button = ({ children, variant, text, type, ...props }) => {
	return (
		<button className={`button ${variant} ${text} ${type} `} {...props}>
			{children}
		</button>
	)
}

export default Button
