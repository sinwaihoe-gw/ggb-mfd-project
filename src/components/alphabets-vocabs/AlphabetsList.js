import React from "react";
import { Link } from "react-router-dom";
import { Col, ListGroup, ListGroupItem, Row } from "shards-react";

import { Store } from "../../flux";
import VocabWordPerkataan from "../category-vocabs/VocabWordPerkataan";

const AlphabetsList = ({ vocabs, alphabet }) => {
  return (
    <ListGroup flush>
      {vocabs.map((vocab, key) => {
        const vocabImgSrc = Store.getSignImgSrc(
          vocab.kategori,
          vocab.perkataan
        );
        const wordFormatted = Store.formatString(vocab.word);

        return (
          <Link key={key} to={`/alphabets/${alphabet}/${wordFormatted}`}>
            <ListGroupItem>
              <Row
                data-aos="fade-up"
                data-aos-delay="200"
                className="vocab-word"
              >
                <Col sm="12" md="4" lg="3">
                  <VocabWordPerkataan
                    word={vocab.word}
                    perkataan={vocab.perkataan}
                  />
                </Col>
                <Col>
                  <button className="vocab-play-button">
                    <i className="material-icons">play_circle_filled</i>
                  </button>
                </Col>
                <Col>
                  <img
                    src={vocabImgSrc}
                    alt={vocab.word}
                    className="vocab-image"
                  />
                </Col>
              </Row>
            </ListGroupItem>
          </Link>
        );
      })}
    </ListGroup>
  );
};

export default AlphabetsList;
