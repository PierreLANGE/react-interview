import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Movie = (props) => (
                <Card keys={props.index} className="card" style={{display:'inline-block'}}>
                <Card.Img variant="top" src={props.movie.img} />
                <Card.Body>
                  <Card.Title>{props.movie.title}</Card.Title>
                  <Card.Text>
                    {props.movie.category}
                  </Card.Text>
                  
                    <div className="row mb-1rem">
                      <div className="col-5" onClick={() => props.handleToggleDislike(props.movie,"like")}>
                        <div className="row">
                          <div className="col-2"><img width="20" height="20" src="like-button.png" alt="like" /></div>
                          <div className="col-9">{props.movie.likes}</div>
                        </div>
                      </div>
                      <div className="col-5" onClick={() => props.handleToggleDislike(props.movie,"dislike")}>
                        <div className="row">
                          <div className="col-2"><img width="20" height="20" src="dislike-button.png" alt="like"/></div>
                          <div className="col-9">{props.movie.dislikes}</div>
                        </div>
                      </div>
                      <progress value={props.movie.likes} max={props.movie.likes + props.movie.dislikes} />

                    </div>
                  <div className="row"><Button onClick={() => props.handleDeleteCard(props.movie)} className="center w10rem" variant="primary">supprimer</Button></div>
                </Card.Body>
              </Card>
);

export default Movie;
