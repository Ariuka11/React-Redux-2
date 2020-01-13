import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchingData} from '../actions'
import Character from './Character'

const Characters = (props) => {

    console.log('CHARACTER PROP FROM THE STATE',props)
    
    useEffect(() => {
        props.fetchingData()
    }, [])

    return (
        <div>
            {props.characters.map(char => {
                return <Character 
                        char = {char}
                        key = {char.id}
                        />
            })}
            <button>Show me</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {characters :state.characters}
}

export default connect (mapStateToProps, {fetchingData})(Characters);