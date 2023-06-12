const fetchData = async (endpoint) => {
	const uri = `https://jsonplaceholder.typicode.com/${endpoint}`
	const response = await fetch(uri)
	const data = await response.json()
	return data
}

module.exports = fetchData