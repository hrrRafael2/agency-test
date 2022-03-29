import React from 'react';
import './Nav.css';

function Nav(props) {
  return (
    <div class='container-fluid container-nav'>
      <div class='container-xxl container-nav-all'>
        <div class='row'>
          <div class='col-8'>
            <div class='d-flex align-items-center'>
              <img src='#' alt='logo' />
            </div>
          </div>
          <div class='col-4'>
            <div class='d-flex justify-content-between align-items-center'>
              <a href='#' class='link'>
                {props.home}
              </a>
              <a href='#' class='link'>
                {props.about}
              </a>
              <a href='#' class='link'>
                {props.service}
              </a>
              <a href='#' class='link'>
                {props.blog}
              </a>
              <button type='button' class='btn btn-primary button'>
                {props.contact}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
