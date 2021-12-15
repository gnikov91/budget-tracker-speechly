import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'

import { Provider } from './context/context'
import App from './App'
import './index.css'

ReactDOM.render(
	<SpeechProvider appId='317d6a18-c845-4d28-8b05-c7b5bc28efc9' language='en-US'>
		<Provider>
			<App />
		</Provider>
	</SpeechProvider>,
	document.getElementById('root')
)
