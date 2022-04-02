const cssStyle = document.createElement('style')
cssStyle.innerHTML = `

.progressStyles {
  color: ${color.textLight};
  background-color: ${color.background};
  border: none;
  margin-top: 40px;
  border-radius: 6px;
}

  progress::-moz-progress-bar {
    background: ${color.textLight};
    border-radius: 6px;
  }

  progress::-webkit-progress-bar {
    background: ${color.background};
    border-radius: 6px;
  }

  progress::-webkit-progress-value {
    background: ${color.textLight};
    border-radius: 6px;
  }

  p {
    display: flex;
    justify-content: center;
  }

  .slider {
    -webkit-appearance: none;
    background: ${color.background};
    outline: none;
    border-radius: 6px;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: ${color.regular};
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
  }
  .slider::-moz-range-thumb {
    -webkit-appearance: none;
    background: ${color.regular};
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
  }

  .headContainer {
    grid-row: 1/2;
    grid-column: 1/6;
    display: flex;
    z-index: 1;
    justify-content: center;
    background: ${color.regular};
    align-items: center;
    overflow-y: hidden;
  }

  .head {
    display: flex;
    min-height: 100%;
    width: auto;
    padding: 0 10%;
    justify-content: center;
    background: ${color.header};
    align-items: center;
    color: ${color.textLight};
    font-size: 2.5em;
    font-weight: 600;
  }


  .main {
    grid-row: 2/3;
    grid-column: 2/5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${color.regular};
    padding: 30px;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  .info {
    grid-row: 3/4;
    grid-column: 3/4;
    background: ${color.main};
    color: ${color.textDark};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }

  .infoContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px 40px;
  }

  .settings {
    grid-row: 4/5;
    grid-column: 2/5;
    background: ${color.regular};
    color: ${color.textDark};
    flex-direction: column;
    border-radius: 8px;
  }

  .options {
    background: ${color.main};
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding-top: 15px;
  }

  .options > * {
    padding: 15px 0;
    width: 100%;
  }

  .optionsTitle {
    text-align: center;
    font-size: 1.1em;
  }

  .optionsRadios {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding-bottom: 45px;
  }

  .optionsCustom {
    display: none;
    padding: 0;
    background: ${color.background};
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .btn {
    background: ${color.textLight}cc;
    padding: 15px 10%;
    font-weight: 600;
    font-size: 1em;
    color: ${color.textDark}cc;
    margin-top: 30px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    box-shadow: none;
  }
  .btn:hover {
    color: ${color.textDark};
    background: ${color.textLight};
    box-shadow: 0px 5px 20px rgba(0,0,0,.25);
  }

  .gamma {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }


  .gamma #gammaValue {
    width: 40px;
    text-align: left;
  }

  .topic {
    display: block;
    font-weight: 600;
    font-size: 1.1em;
    text-align: center;
    color: ${color.textDark};
    padding: 20px 0;
    text-align: left;
    text-transform: uppercase;
  }

  .imgSize {
    color: ${color.textDark};
    margin-bottom: 20px;
  }

  .img {
    display: none; /*before loaded*/
    border-radius: 8px;
    border: 2px solid ${color.textDark};
    max-width: 100%;
    min-width: 200px;
  }

  .warningSize {
    background: transparent;
    display: none;
    padding: 20px;
    color: rgba(255,0,0,.5);
  }

  .a {
    color: #6cc644;
    text-decoration-line: underline;
    text-decoration-style: dashed;
  }

  .cop {
    opacity: .5;
  }

  .sideBarInfo {
    grid-row: 1/8;
    grid-column: 5/6;
    background: ${color.background};
    padding: 100px 30px 20px 30px;
    color: ${color.textDark};
    user-select: text;
  }

  .loadContent {
    grid-row: 3/4;
    grid-column: 4/5;
    background: ${color.regular};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }

  .saveContent {
    grid-row: 3/4;
    grid-column: 2/3;
    background: ${color.regular};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }

  .userBtn {
    background: ${color.regular};
    padding: 20px 20%;
    margin: 20px;
    font-weight: 600;
    font-size: 1.1em;
    cursor: pointer;
    color: ${color.textDark};
    border-radius: 10px;
  }

  #saver {
    border: solid 5px ${color.main};
  }

  #loader-label {
    border: dashed 5px ${color.main};
  }

  .radioGroup {
    background: ${color.regular}00;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 6px;
    border: 2px solid ${color.textDark}33;
  }

  .radioChecked {
    background: ${color.regular}00;
    box-shadow: 0px 5px 20px rgba(0,0,0,.25);
    border: none;
    cursor: default;
  }

  .checkboxGroup {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: ${color.background};
    padding: 40px 20px;
    transition: 400ms;
  }

  .checkboxGroup img {
    max-height: 35px;
    max-width: 35px;
    object-fit: cover;
  }

  .checkboxChecked {
    opacity: 1;
    background: rgba(0,0,0,.125);
  }

  .footer {
    background: ${color.header};
    color: ${color.textLight}88;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: .9em;
    padding: 20px 0;
    grid-row: 6/7;
    grid-column: 2/5;
    user-select: text;
    border-radius: 8px;
  }

  .footer .center > * {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer .center {
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 1300px) {
    #wrapper {
      grid-template-rows: 80px auto auto auto auto 1fr auto 0;
      grid-template-columns: 0 auto auto 25vw;
    }

    .headContainer {
      grid-column: 1/5
    }

    .sideBarInfo {
      grid-column: 4/5;
      grid-row: 1/9;
    }

    .main {
      grid-column: 2/4;
    }

    .saveContent {
      grid-column: 2/3;
    }
    .loadContent {
      grid-column: 3/4;
    }

    .info {
      grid-row: 4/5;
      grid-column: 2/4;
    }

    .settings {
      grid-row: 5/6;
      grid-column: 2/4;
    }

    .footer {
      grid-row: 7/8;
      grid-column: 2/4;
    }
  }

  @media only screen and (max-width: 1000px) {
    #wrapper {
      grid-template-rows: 80px auto auto auto auto auto auto;
      grid-template-columns: auto auto;
      grid-gap: 0;
    }

    #wrapper > * {
      border-radius: 0;
      box-shadow: none;
    }

    .headContainer {
      grid-row: 1/2;
      grid-column: 1/3;
    }

    .head {
      width: 100%;
    }

    .sideBarInfo {
      grid-row: 6/7;
      grid-column: 1/3;
      height: auto;
      padding: 20px 30px;
    }

    .main {
      grid-row: 2/3;
      grid-column: 1/3;
    }

    .userBtn {
      margin: 40px 20px;
    }

    .saveContent {
      grid-row: 3/4;
      grid-column: 1/2;
      box-shadow: none;
    }

    .loadContent {
      grid-row: 3/4;
      grid-column: 2/3;
      box-shadow: none;
    }

    .info {
      grid-row: 4/5;
      grid-column: 1/3;
      border-bottom: 2px solid ${color.header}33;
    }

    /*

        .options {
          padding: 15px 0px 30px 0px;
        }
    */

    .settings {
      grid-row: 5/6;
      grid-column: 1/3;
    }

    .footer {
      grid-row: 7/8;
      grid-column: 1/3;
    }
  }
`
document.head.appendChild(cssStyle)
