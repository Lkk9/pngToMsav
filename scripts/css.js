const cssStyle = document.createElement('style')
cssStyle.innerHTML = `
    progress::-moz-progress-bar {
    background: ${color.textLight};
  }
  .side {
    background: ${color.background};
    padding: 100px 30px 20px 30px;
    color: ${color.textDark};
    user-select: text;
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
  .group a {
    color: ${color.link};
    text-decoration-line: underline;
    text-decoration-style: dashed;
  }

  #loader-label {
    background: ${color.regular};
    padding: 20px 20%;
    font-weight: 600;
    font-size: 1.1em;
    cursor: pointer;
    color: ${color.textDark};
    border: dashed 5px ${color.main};
    border-radius: 10px;
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
    border-radius: 8px;
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
`
document.head.appendChild(cssStyle)
