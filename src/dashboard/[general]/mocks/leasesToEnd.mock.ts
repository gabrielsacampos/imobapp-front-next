


const leasesToEnd = [
	{ cod: '3', building: "Eko Home Club", unity: '121', block: "Ipe", rooms: 4, value: 1000, endAt: '2023/01/01' },
	{ cod: '5', building: "Great Place", unity: '1', block: "Some", rooms: 3, value: 1500, endAt: '2023/01/01' },
	{ cod: '10', building: "Eko Home Club", unity: '001', block: "Jacarandá", rooms: 1, value: 2000, endAt: '2023/05/01' },
	{ cod: '32', building: "The Big Building", unity: '100', block: "Legado", rooms: 2, value: 800, endAt: '2023/01/01' }
]

const allHeaderss = leasesToEnd
	.map((item) => {
		const keys = Object.keys(item);
		const keysPtBr = keys.map((key) => {
			switch (key) {
				case 'cod':
					return 'Código'
				case 'endAt':
					return 'Encerramento'
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

const rows = leasesToEnd.map((item) => Object.values(item))


export { headers, title, rows };