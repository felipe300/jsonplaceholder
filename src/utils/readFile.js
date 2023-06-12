const { existsSync, readFileSync } = require("fs")
const path = require('path')
const dirPath = path.join(__dirname, '../../apiFolders')

function readFileFunc (fileName) {
	let file = `${dirPath}/${fileName}/${fileName}.json`
	try {
		if (existsSync(file)) {
			let data = readFileSync(file, 'utf-8')
			console.log(data)
		} else {
			console.log("El archivo no existe. Utilize 'leer' para ver los posibles archivos")
		}
	} catch (err) {
		console.error(err)
	}
}

module.exports = readFileFunc