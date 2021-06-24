import React from 'react'
import styled from 'styled-components'
import { selectMovies } from '../features/movie/movieSlice'

function Movies() {
    return (
        <Container>
            <h4>
                Recommended for You
            </h4>
            <Content>
                <Wrap>
                    <img src="https://pbs.twimg.com/media/EqejxIKXYAAzqFn?format=jpg&name=small" alt=""></img>
                </Wrap>
                <Wrap>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Loki_%28TV_series%29_logo.png/250px-Loki_%28TV_series%29_logo.png" alt=""></img>
                </Wrap>
                <Wrap>
                    <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/4c/Previously_WandaVision_Logo.png" alt=""></img>
                </Wrap>
                <Wrap>
                    <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b8/The_Falcon_and_the_Winter_Soldier_-_TitleCard1.png" alt=""></img>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    padding: 30px 0px 26px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }
`