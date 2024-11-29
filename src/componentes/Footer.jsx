import styled from 'styled-components'

export const Footer = () => {
  return (
    <FooterContainer className="main-footer">
        <div className='footer-middle'>

      <div className="container">
        <div className="row">
             {/*Columna 1*/}
          <div className="col-md-3 col-sm-6">
            <h4>Lorem ipsum dolor</h4>
            <ul className="list-unstyled">
              <li>lorem ipwum </li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
                       {/*Columna 2*/}
                       <div className="col-md-3 col-sm-6">
            <h4>Lorem ipsum dolor</h4>
            <ul className="list-unstyled">
              <li>lorem ipwum </li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
                       {/*Columna 3*/}
                       <div className="col-md-3 col-sm-6">
            <h4>Lorem ipsum dolor</h4>
            <ul className="list-unstyled">
              <li><a href="">lorem ipwum </a></li>
              <li><a href="">lorem ipwum </a></li>
              <li><a href="">lorem ipwum </a></li>
              <li><a href="">lorem ipwum </a></li>
            </ul>
          </div>
                       {/*Columna 4*/}
                       <div className="col-md-3 col-sm-6">
            <h4>Lorem ipsum dolor</h4>
            <ul className="list-unstyled">
              <li>lorem ipwum </li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
        </div>
        {/*Footer Bottom*/}
        <div className="footer-bottom">
            <p className="text-xs-center">
                &copy;{new Date().getFullYear()} City Guide App - All Rigthts Reserved
            </p>


        </div>
      </div>
      </div>
    </FooterContainer>
  );
};
const FooterContainer = styled.footer`
.footer-middle{
background: var(--mainDark);
padding-top:3rem;
color:var(--mainWhite);
}
.footer-bottom{
padding-top:3rem;
padding-bottom:2rem;
}

`;

