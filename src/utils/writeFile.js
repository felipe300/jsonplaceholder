const { writeFileSync, existsSync } = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, '../../apiFolders')

function writeFileFunc (fileName, content) {
	let data = JSON.stringify(content, null, 2)
	let file = `${dirPath}/${fileName}/${fileName}.json`
	try {
		if (existsSync(file)) {
			console.log(`${fileName} ya está creado`)
		} else {
			writeFileSync(file, data)
			console.log(`${fileName} creado`)
		}
	} catch (err) {
		console.error(err)
	}
}

module.exports = writeFileFunc