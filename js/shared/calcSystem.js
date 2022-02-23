const tasaDolar = document.getElementById('tasa-dolar')
const montoTotalDolar = document.getElementById("monto-total-dolar")
const montoTotalBs = document.getElementById('monto-total-bs')

	// esta funcion cambia los campos que represental el total, tanto en bs como en $

		function changeTotal(){
			let count = 1;
			let suma = 0;
		
			do{
				let input = document.getElementById(`priceTotalDolar${count}`)
				
				if(input == null){
					count = -2
				}else{
				suma = Number(suma) + Number(input.value)
			  }
				count++;

			} while(count > -1)
			
			montoTotalDolar.value = suma.toFixed(2);
			montoTotalBs.value = (montoTotalDolar.value * tasaDolar.value).toFixed(2)
		}


	// esta funcion hace la conversion a bolivares y actualiza los campos

				function converToBs(e){
					const getCount = e.id.slice(5)
					const mount = document.getElementById(`mount${getCount}`)
					const priceBs = document.getElementById(`priceBs${getCount}`)
					const priceTotalBs = document.getElementById(`priceTotalBs${getCount}`)
					const priceTotalDolar = document.getElementById(`priceTotalDolar${getCount}`)
					const priceDolar = document.getElementById(`price${getCount}`)

					priceBs.value =  (tasaDolar.value*e.value).toFixed(2)
					priceTotalBs.value = ((tasaDolar.value * e.value) * mount.value).toFixed(2)
					priceTotalDolar.value = (priceDolar.value * mount.value).toFixed(2) 


					if(document.getElementById(`priceTotalDolar1`) != null){
						changeTotal()
					}
				}


	// esta funcion al cambiar la cantidad de articulos, se actualiza los demas campos dependientes

				function changeMount(e){
				const getCount = e.id.slice(5)
				const priceDolar = document.getElementById(`price${getCount}`)
				converToBs(priceDolar)
				}