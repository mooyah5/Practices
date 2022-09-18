import { useRef, useState } from "react";

const DiaryEditor = ({onCreate}) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    if (state.author.length < 1) {
      // alert('작성자는 최소 1글자 이상 입력해주세요.');
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      alert('내용은 최소 5글자 이상 입력해주세요.');
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion)
    setState({
      author: '',
      content: '',
      emotion: 1,
    })
    alert('저장 성공!');
  }

  // const [author, setAuthor ] = useState("");
  // const [content, setContent] = useState("");

  return <div className="DiaryEditor">
    <h2>오늘의 일기</h2>
    <div>
      <input
        ref={authorInput}
        name="author"
        onChange={handleChangeState}
        value={state.author}/>
    </div>
    <div>
      <textarea
        ref={contentInput}
        name="content"
        rows="3"
        value={state.content}
        onChange={handleChangeState} />
    </div>
    <div>
      <select
        name="emotion"
        onChange={handleChangeState}
        value={state.emotion}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
    <div>
      <button onClick={handleSubmit}>저장하기</button>
    </div>
  </div>
}

export default DiaryEditor;