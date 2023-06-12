const { existsSync, mkdirSync } = require('fs')

const folderStruture = (folderName) => `./apiFolders/${folderName}`

function createFolder (name) {
	try {
		if (!existsSync(folderStruture(name))) {
			mkdirSync(folderStruture(name), { recursive: true }, (err) => {
				if (err) throw err
			})
		} else {
			console.log("direcorio ya existe")
		}
	} catch (err) {
		console.error(err)
	}
}

module.exports = createFolder
