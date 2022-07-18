import '../styles/globals.css'
import '@fontsource/poppins'
import { AppStateProvider } from 'context/appState'

function MyApp({ Component, pageProps }) {
	return (
		<AppStateProvider>
			<Component {...pageProps} />
		</AppStateProvider>
	)
}

export default MyApp
