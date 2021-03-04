import styled from 'styled-components'

const HomeContainer = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .react-multi-carousel-list li {
    width: 300px!important;
    margin-right: 12px;
  }

  .items {
    cursor: grab;
  }

  .items img {
    border-radius: 8px
  }

  .header .right div:not(:last-child) {
    margin-right: 48px;
  }

  .content .items div {
    user-select: none;
  }

  @media only screen and (max-width: 420px){
    .items {
      margin-top: 1rem;
    }

    .title {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .title p {
      font-size: 28px;
      line-height: 28px;
    }

    .header .right div:not(:last-child) {
      margin-right: 14px;
    }

    .react-multi-carousel-item img {
      width: 294px!important;
    }
  }

  @media only screen and (max-width: 321px){
    .header .right div,
    .header .right button {
      font-size: 14px
    }

    .title p {
      font-size: 22px;
      line-height: 22px;
    }
  }

`
export default HomeContainer