export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    // const { id } = await params;
    // const post = await getPost(id);
    // app router에서 페이지 동적 생성 시 비동기적으로 전달되며, params가 비동기적 전달되며 Promise 형태로 받음.
    // next 15부터 params, searchParams, headers(), cookies() 등 여러 값이 lazy resolution 방식으로 전달됨
    // react의 동시성 특성과 어울려, 필요 시점에만 해당 값을 읽고 컴포넌트 일부틑 먼저 렌더하는 흐름

    const post = [
        { idx: 0, title: 'First Post', content: 'This is the content of the first post.' },
        { idx: 1, title: 'Second Post', content: 'this is the content of the second post.' },
    ];
    return (
        <div>
            <div>{post[0].title}</div>
            <div>{post[0].content}</div>
        </div>
    );
}
