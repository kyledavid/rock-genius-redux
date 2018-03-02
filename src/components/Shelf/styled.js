import styled from 'styled-components'

export const Descriptor = styled.span`
font-weight: bold;
`

export const DetailShelf = styled.aside`
position: absolute;
right: 0;
top: 0;
bottom: 0;
width: 300px;
font-family: monospace, arial, sans-serif;
font-size: 13px;
`

export const Instructions = styled.h2`
height: 1.87em;
line-height: 1.15em;
margin-top: 1em;
margin-bottom: 0;
background-color: #fff;
padding: 0 1em;
`

export const ShelfContent = styled.div`
width: 300px;
min-height: 200px;
height: 415px;
overflow: hidden;
background-color: #fff;
box-sizing: border-box;
img {
  width: 100%;
}
`

export const RouteList = ShelfContent.extend`
min-height: 300px;
margin-top: 6.5px;
list-style-type: none;
font-size: 1.4em;
padding: 1em;
a {
  text-decoration: none;
  color: #444;
}
li {
  padding-bottom: .25em;
}
`

export const ShelfInnerWrapper = styled.div`
display: flex;
flex-direction: column;
height: 574px;
padding-top: .5em;
`

export const ShelfOuterWrapper = styled.div`
position: fixed;
width: 1200px;
height: 0;
margin: auto;
top: 0;
left: 0;
right: 75px;
`
