<script>
	let inputText = '';

	let todoList = [
		{
			id: 1,
			completed: false,
			content: '스벨트 학습하기'
		},
		{
			id: 2,
			completed: true,
			content: '타입스크립트 학습하기'
		}
	];

	const addTodo = () => {
		todoList = [...todoList, { id: todoList.length + 1, content: inputText, completed: false }];
	};

	const changeCompleted = () => {
		!todo.completed ? true : false;
	};
</script>

<div class="container">
	<h1>To Do List</h1>
	<input type="text" bind:value={inputText} placeholder="할 일을 입력해 주세요!" />
	<button on:click={addTodo}>저장</button>

	<ul>
		{#each todoList as todo}
			<li>
				<input type="checkbox" on:click={changeCompleted} checked={todo.completed} />
				{todo.id}. {todo.content}
			</li>
		{/each}
	</ul>
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
		font-family: 'HakgyoansimWoojuR';
	}
	ul {
		padding-left: 0;
	}
	li {
		list-style: none;
		padding-top: 4px;
	}
</style>
