		const inputs = document.getElementById('content-articles')
		const getCount = inputs.lastChild == null ? 1 : inputs.lastChild.id.slice(7)
		let count = Number(getCount);	


	if(inputs.lastChild == null){
	inputs.innerHTML = 
				`
				<div class="article">
				<span>${count}#</span>
				<input id="article${count}"" type="text" name="product" placeholder="nombre del articulo">
				</input>
				<input id="mount${count}" type="number" name="amount" oninput="changeMount(this)" placeholder="cantidad de articulos"></input>
				<input id="price${count}" step="0.01" oninput="converToBs(this)" type="number" name="priceDolar" placeholder="precio $"></input>
				<input id="priceBs${count}" step="0.01" type="number" name="priceBs" placeholder="precio bs" readonly>
				<input id="priceTotalDolar${count}" step="0.01" type="number" name="priceTotalDolar" placeholder="monto $" readonly>
				<input id="priceTotalBs${count}" step="0.01" type="number" name="priceTotalBs" placeholder="monto Bs" readonly>
				
				</div>
				`
		}	

		function addNewArticle(){
			count++;
			let div = document.createElement('div');
			div.setAttribute('class', 'article')
				div.innerHTML = `
				<div class="article">	
				<span>${count}#</span>
				<input id="article${count}"" type="text" name="product" placeholder="nombre del articulo">
				</input>
				<input id="mount${count}" oninput="changeMount(this)" type="number" name="amount" placeholder="cantidad de articulos"></input>
				<input id="price${count}" step="0.01" type="number" oninput="converToBs(this)" name="priceDolar" placeholder="precio $"></input>
				<input id="priceBs${count}" step="0.01" type="number" name="priceBs" placeholder="monto bs" readonly>
				<input id="priceTotalDolar${count}" step="0.01" type="number" name="priceTotalDolar" placeholder="total $" readonly>
				<input id="priceTotalBs${count}" step="0.01" type="number" name="priceTotalBs" placeholder="monto Bs" readonly>

					<button onClick="removeArticle(this)" class="btn-delete-art">eliminar</button>
				</div>	
					`


				inputs.appendChild(div)
			
		}



		function removeArticle(e){
			count--
			e.parentElement.remove()
			changeTotal()
		}