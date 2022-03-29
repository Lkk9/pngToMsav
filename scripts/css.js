const cssStyle = document.createElement('style')
cssStyle.innerHTML = `
    progress::-moz-progress-bar {
    background: ${color.textLight};
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
    border-radius: 0;
  }

  .head {
    display: flex;
    font-size: 2.5em;
    min-height: 100%;
    width: auto;
    padding: 0 10%;
    font-weight: 600;
    justify-content: center;
    background: ${color.header};
    align-items: center;
    color: ${color.textLight};
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
  }

  .info {
    grid-row: 3/4;
    grid-column: 3/4;
    background: ${color.main};
    color: ${color.textDark};
    padding: 30px 40px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .settings {
    grid-row: 4/5;
    grid-column: 2/5;
    background: ${color.regular};
    color: ${color.textDark};
    flex-direction: column;
  }

  .options {
    background: ${color.main};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 40px;
    flex-direction: column;
  }

  .optionsRadios {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px;
    justify-content: space-around;
  }

  .optionsCustom {
    display: none;
    padding: 0;
    background: ${color.background};
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .btn {
    background: ${color.textLight}cc;
    width: 120px;
    height: 60px;
    font-weight: 600;
    font-size: 1em;
    color: ${color.textDark}cc;
    margin-top: 40px;
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

  .topic {
    display: inline-block;
    font-weight: 600;
    text-align: center;
    color: ${color.textDark};
    background: ${color.main};
    margin: 20px 0;
    padding: 1px 20px;
    text-transform: uppercase;
  }

  .imgSize {
    color: ${color.textDark};
  }

  .img {
    display: none;
    margin-top: 20px;
    justify-content: center;
    border-radius: 8px;
    border: 2px solid ${color.textDark};
  }

  .warningSize {
    background: transparent;
    display: none;
    padding: 20px;
    color: rgba(255,0,0,.5);
  }

  .group a {
    color: ${color.link};
    text-decoration-line: underline;
    text-decoration-style: dashed;
  }

  .sideBarInfo {
    grid-row: 1/8;
    grid-column: 5/6;
    background: ${color.background};
    padding: 100px 30px 20px 30px;
    color: ${color.textDark};
    user-select: text;
    border-radius: 0;
  }

  .loadContent {
    grid-row: 3/4;
    grid-column: 4/5;
    background: ${color.regular};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .saveContent {
    grid-row: 3/4;
    grid-column: 2/3;
    background: ${color.regular};
    display: flex;
    justify-content: center;
    align-items: center;
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

  #saver-label {
    border: solid 5px ${color.main};
  }

  #loader-label {
    border: dashed 5px ${color.main};
  }

  .progressStyles {
    color: ${color.textLight};
    background-color: ${color.background};
    border: none;
    margin-top: 40px;
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
  }

  .footer span {
    margin: 5px 0;
    opacity: .5;
  }
  .footer span:first-child {
    color: #5865F2;
    opacity: 1;
    user-select: text;
  }

  @media only screen and (max-width: 800px) {
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

    .sideBarInfo {
      grid-row: 2/3;
      grid-column: 1/3;
      height: auto;
      padding: 20px 30px;
    }

    .main {
      grid-row: 3/4;
      grid-column: 1/3;
    }

    .userBtn {
      margin: 40px 20px;
    }

    .saveContent {
      grid-row: 4/5;
      grid-column: 1/2;
      box-shadow: none;
    }

    .loadContent {
      grid-row: 4/5;
      grid-column: 2/3;
      box-shadow: none;
    }

    .info {
      grid-row: 5/6;
      grid-column: 1/3;
    }

    .options {
      padding: 15px 0px 30px 0px;
    }

    .settings {
      grid-row: 6/7;
      grid-column: 1/3;
    }

    .footer {
      grid-row: 7/8;
      grid-column: 1/3;
    }
  }
`
document.head.appendChild(cssStyle)
