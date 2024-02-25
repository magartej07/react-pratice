import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  const [term, setTerm] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDictionary = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
    );
    const data = await response.json();
    // console.log(data)
    setResponse(data[0]);
    setLoading(false);
  };

  return (
    // fragment
    <>
      <Header />
      <Container className="my-5">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            fetchDictionary();
          }}
          className="d-flex gap-4"
        >
          <InputGroup>
            <InputGroup.Text> </InputGroup.Text>
            <Form.Control
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </InputGroup>
          <Button disabled={loading}>
            {loading ? "Loading..." : "Search"}
          </Button>
        </Form>

        <Card>
          {response && (
            <Card.Body>
              <div>
                <p>{response.word}</p>
                <p>{response.phonetic}</p>
              </div>

              <audio src={response.phonetics[0].audio} controls></audio>
              <div>
                {response.meanings.map((meaning, index) => (
                  <div key={index}>
                    <p>{meaning.partOfSpeech}</p>
                    <ul>
                      {meaning.definitions.map((definition, index) => (
                        <li key={index}>{definition.definition}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {/* to see json */}
              {/* {JSON.stringify(response, null, 2)} */}
            </Card.Body>
          )}
        </Card>
      </Container>
    </>
  );
}

export default App;
