

const availableProps = [
	{ building: "Eko Home Club", unity: '121', block: "Ipe", rooms: 4, value: 1000, },
	{ building: "Great Place", unity: '1', block: "Some", rooms: 3, value: 1500, },
	{ building: "Eko Home Club", unity: '001', block: "Jacarandá", rooms: 1, value: 2000 },
	{ building: "The Big Building", unity: '100', block: "Legado", rooms: 2, value: 800, }
]


const allHeaderss = availableProps
	.map((item) => {
		const keys = Object.keys(item);
		const keysPtBr = keys.map((key) => {
			switch (key) {
				case 'building':
					return 'Empreendimento';
				case 'unity':
					return 'Unidade';
				case 'block':
					return 'Torre/Bloco'
				case 'rooms':
					return 'Quartos'
				case 'value':
					return 'Valor'
			}
		})
		return keysPtBr;
	})
	.reduce((acc, curr) => acc.concat(curr), [])
const headers = [...new Set(allHeaderss)]

const title = 'Esses são os úncios imóveis disponíveis no momento'

const rows = availableProps.map((item) => Object.values(item))


export { headers, title, rows };