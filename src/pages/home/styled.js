import styled from 'styled-components'

const HomeContainer = styled.div`
    .container {
        background-size: cover;
        height: 100%;
        width: 100%;
        min-height: 700px;
        background-repeat: no-repeat;
    }
    .overlay {
        background: rgba(0,0,0,.4);
        background-image: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.8)),color-stop(60%,rgba(0,0,0,0)),to(rgba(0,0,0,.8)));
        background-image: -webkit-linear-gradient(bottom,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
        background-image: -moz- oldlinear-gradient(bottom,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
        background-image: -o-linear-gradient(bottom,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
        background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
    }

`

export default HomeContainer