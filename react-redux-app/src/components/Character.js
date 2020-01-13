import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Character = (props) => {
    return (
        <Card>
            {/* <link to = {props.char.url}> */}
            <Image src={props.char.image} wrapped ui={false} to = {props.char.url} />
            {/* </link> */}
            <Card.Content>
                <Card.Header>{props.char.name}</Card.Header>
                <Card.Meta>Status : {props.char.status}</Card.Meta>
                <Card.Meta>Species : {props.char.species}</Card.Meta>
                <Card.Meta>Origin : {props.char.origin.name}</Card.Meta>
                <Card.Description>
                    {props.char.name} is the of the characters of "Rick and Morty" tv show and appears in {props.char.episode.length} episodes.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                    <a href = {props.char.location.url}>
                        <Icon name='location arrow' />
                        Current Location : {props.char.location.name}
                    </a>
            </Card.Content>
        </Card>
    )
}

export default Character;



