import logo from './logo.svg';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import './App.css';

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(evt) => {
            evt.preventDefault();
            props.onSelect();
          }}
        >
          Web
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const list = props.data.map((e) => (
    <li key={e.id}>
      <a
        href={'/read/' + e.id}
        onClick={(evt) => {
          evt.preventDefault();
          props.onSelect(e.id);
        }}
      >
        {e.title}
      </a>
    </li>
  ));

  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
  ];

  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB!" />;
  } else if (mode === 'READ') {
    const topic = topics.filter((e) => e.id === id)[0];
    content = <Article title={topic.title} body={topic.body} />;
  }
  return (
    <div>
      <Header
        onSelect={() => {
          setMode('WELCOME');
        }}
      />
      <Nav
        data={topics}
        onSelect={(id) => {
          setMode('READ');
          setId(id);
        }}
      />
      {content}
      <ButtonGroup
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={() => {
            alert('create!');
          }}
        >
          Create
        </Button>
        <Button>Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>
    </div>
  );
}

export default App;
