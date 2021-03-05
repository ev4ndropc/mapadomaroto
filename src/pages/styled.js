import styled from 'styled-components'

const HomeContainer = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .items {
    cursor: grab;
  }

  .header .right div:not(:last-child) {
    margin-right: 48px;
  }

  .content .items div {
    user-select: none;
  }

  @media only screen and (max-width: 564px){
    .footer>div {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .footer .logo {
      margin-bottom: 24px
    }
  }

  @media only screen and (max-width: 464px){
    .items {
      margin-top: 1rem;
    }

    .title {
      margin-top: 3rem;
      margin-bottom: 2rem;
    }

    .title p {
      font-size: 28px;
      line-height: 28px;
    }

    .header .right div:not(:last-child) {
      margin-right: 20px;
    }

    .react-multi-carousel-item img {
      width: 100%!important;
    }

    .footer .footer-menu {
      flex-direction: column;
      align-items: center;
    }
  }

  @media only screen and (max-width: 321px){
    .header .right div,
    .header .right button {
      font-size: 12px
    }

    .header .right div:not(:last-child) {
      margin-right: 16px;
    }

    .title p {
      font-size: 22px;
      line-height: 22px;
    }
  }

`
export default HomeContainer