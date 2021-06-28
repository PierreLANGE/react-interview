import React from 'react';
import Button from 'react-bootstrap/Button';

const Pagination = (props) => (
    <div className="row">
    <div className="col-3">
      <select onChange={e => props.onCategorieFilter(e)}>
        <option>Choisissez votre categorie</option>
        {props.categories.map((category, i) => (
          <option key={i} value={category}>
            {category}
          </option>
        ))}
      </select>              
    </div>
    <div className="col-4 center">
      <Button className="w10rem mr-1rem" type="button" onClick={e => props.onPageBack(e.target.selectedIndex)} variant="secondary">
        précédent
      </Button>
      <Button className="w10rem" type="button" onClick={e => props.onPageNext(e.target.selectedIndex)} variant="secondary">
        suivant
      </Button>
    </div>
    <div className="col-3">
        <select
          onChange={(e)=>props.onSelectPerPage(e)}
        >
          <option value="10">Nombre de carte par page</option>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
      </select>
    </div>
  </div>
);

export default Pagination;
