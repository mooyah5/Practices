<script>
	let num = 0;
	let upUnit = 1;

	function addNum() {
		num += upUnit;
	}
</script>

<div class="container">
	<h1>😢 Let's count!</h1>

	<label id="upUnitLabel" for="upUnitInput">더할 수 : </label>
	<input id="upUnitInput" type="number" bind:value={upUnit} />
	<button on:click={addNum}>ADD {upUnit}</button>
	<h2>{num}</h2>
</div>

<style>
	@font-face {
		font-family: 'HakgyoansimWoojuR';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimWoojuR.woff2')
			format('woff2');
		font-weight: normal;
		font-style: normal;
	}
	.container {
		text-align: center;
		font-family: HakgyoansimWoojuR;
	}
	h1 {
		margin-bottom: 40px;
	}
	input {
		padding: 2px 10px;
		font-size: 15px;
		height: 25px;
		border: rgb(186, 186, 186) 1px solid;
		border-radius: 5px;
		width: 80px;
	}
	button {
		height: 29px;
		color: white;
		margin: 0 3px;
		background-color: rgb(43, 98, 248);
		border: none;
		border-radius: 5px;
	}
	#upUnitLabel {
		font-size: 20px;
		font-weight: 900;
	}
	h2 {
		margin-top: 20px;
	}
</style>
