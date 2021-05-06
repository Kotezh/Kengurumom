import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFoundPage.css";
import {pageNotFoundImg} from './constants';
import {pageNotFoundTitle} from './texts';
import {MAIN_PAGE} from '../../config/links';
import Button from '../Button/Button';

export default function NotFoundPage(){
  return (
    <section className="not-found">
      <h2 className="not-found__title">{pageNotFoundTitle}</h2>
      <img className="not-found__img" src={pageNotFoundImg} alt="Страница не найдена" />
      <Link exact to={MAIN_PAGE}>
      <Button text="Вернуться на главную" type="button" style="button_type_not-found"/>
      </Link>
    </section>
  )
}