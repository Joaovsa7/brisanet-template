import Script from 'next/script'

export function Adsense() {
	return (
		<Script
			src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6270789141735296"
			strategy="afterInteractive"
		/>
	)
}
