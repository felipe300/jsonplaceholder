const createFolder = require("./createFolder")
const writeFileFunc = require("./writeFile.js")
const readFileFunc = require("./readFile.js")
const fetchData = require("../fetchData.js")

const arrOfEndpoints = ["comments", "photos", "albums", "todos", "users", 'posts']

async function operations () {
	let args = process.argv.slice(2)
	let command = args[0]
	let endpoint = args[1]

	switch (command) {
		case 'leer':
			for (const singleArr of arrOfEndpoints) {
				console.log(singleArr)
			}
			break

		case 'buscar':
			readFileFunc(endpoint)
			break

		case 'crear':
			const data = await fetchData(endpoint)
			createFolder(endpoint)
			writeFileFunc(endpoint, data)
			break

		case 'ayuda':
			console.log("Comandos => \n\tleer: lista de posibles archivos a crear,\n\tcrear: crear + nombre del archivo,\n\tbuscar: bucar + nombre del archivo")
			break
		default:
			console.log("comando no reconocido, utiliza 'ayuda' para ver los comandos")
	}
}

module.exports = operations