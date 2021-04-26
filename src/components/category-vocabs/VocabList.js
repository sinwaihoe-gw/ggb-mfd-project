import React from "react";
import { Link } from "react-router-dom";
import { Col, ListGroup, ListGroupItem, Row } from "shards-react";

import { Store } from "../../flux";

const VocabList = ({vocabs, group, category}) => {
    return(
        <ListGroup flush>    
            {vocabs.vocabs.map((vocab, key) => {
            const vocabImgSrc = Store.getSignImgSrc(vocab.wordMalay.toLowerCase());

                return(
                    <Link key={key} to={`/${group}/${category}/${vocab.word.toLowerCase()}`}>
                        <ListGroupItem>
                            <Row data-aos="fade-up" data-aos-delay="200" className="vocab-word">
                                <Col sm="12" md="4" lg="2">
                                    <strong className="text-muted d-block mb-2">
                                        {vocab.wordMalay}
                                    </strong>
                                    <strong className="text d-block mb-2">
                                        {vocab.word}
                                    </strong>
                                </Col>
                                <Col>
                                    <button className="vocab-play-button" >
                                        <i className="material-icons">play_circle_filled</i>    
                                    </button>                            
                                </Col>                        
                                <Col>
                                    <img src={vocabImgSrc} alt={vocab.word} className="vocab-image" />
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </Link>
                );
            })}
        </ListGroup>
    );
}

export default VocabList;
