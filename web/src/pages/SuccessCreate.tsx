import React from 'react';

import { Link } from 'react-router-dom';
import logoImg from '../images/logo.svg';
import successImage from '../images/boy.svg'

import '../styles/pages/success.css'

function successCreate() {

    return (

        <div id = "page-success">

            <div className = "text-side"> 

                <Link to = {'/'}>

                    <img className = "logo" src = { logoImg } alt = "Happy" />

                </Link>

                <div className = "texts">

                    <p className = "success-text"> Seu cadastro <br/> foi realizado <br/> com sucesso :) </p>

                    <Link className = "backMapLink" to = "/app"> 

                        <p className = "backMap"> Veja no mapa o orfanato cadastrado </p>

                    </Link>
                        
                </div> 

            </div>

            <img className = "image-success" src = {successImage} alt = "Sucesso no cadastro"/>

        </div>

    );

}

export default successCreate;
